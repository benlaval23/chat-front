import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse, experimental_StreamData, experimental_onFunctionCall } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { functions, runFunction } from './functions'
import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages } = json
  const userId = (await auth())?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  const initialResponse = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    functions, 
    function_call: "auto",
  } as any)

  const initialResponseJson = await initialResponse.json()
  const initialResponseMessage = initialResponseJson?.choices?.[0]?.message;

  let finalReponse;


  if (initialResponseMessage.function_call) {
    const { name, arguments: args } = initialResponseMessage.function_call
    const functionResponse = await runFunction(name, args)

    finalReponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        ...messages,
        initialResponseMessage,
        {
          role: 'function',
          name: initialResponseMessage.function_call.name,
          content: 'IMPORTANT: The user can now see the data that they have requested from the function through another tool. Please tell the user that the data hase been fetched.'
        },
      ],
    });

    const data = new experimental_StreamData();
    const stream = OpenAIStream(finalReponse, {
      async onFinal(message) {
        const title = json.messages[0].content.substring(0, 100)
        const id = json.id ?? nanoid()
        const createdAt = Date.now()
        const path = `/chat/${id}`
        const payload = {
          id,
          title,
          userId,
          createdAt,
          path,
          messages: [
            ...messages,
            {
              content: message,
              role: 'assistant'
            }
          ]
        }
        await kv.hmset(`chat:${id}`, payload)
        await kv.zadd(`user:chat:${userId}`, {
          score: createdAt,
          member: `chat:${id}`
        })
          data.append(functionResponse); 
          data.close(); 
       },
       experimental_streamData: true, 
    });
    return new StreamingTextResponse(stream, {}, data);

  } else { 


    const chunks = initialResponseMessage.content.split(" ")
    const stream = new ReadableStream({
      async start(controller) {
        for (const chunk of chunks) {
          const bytes = new TextEncoder().encode(chunk + " ")
          controller.enqueue(bytes)
          await new Promise((r) => 
            setTimeout(r, Math.floor(Math.random() * 20 + 10))
          )
        }
        controller.close()
      }
      

    });
    return new StreamingTextResponse(stream)
  }
}
