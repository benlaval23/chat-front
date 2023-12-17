import { OpenAIStream, StreamingTextResponse } from 'ai'
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

    console.log(`Function Response: ${functionResponse}`)

    finalReponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        ...messages,
        initialResponseMessage,
        {
          role: 'function',
          name: initialResponseMessage.function_call.name,
          content: JSON.stringify(functionResponse)
        },
      ],
    });

    

    const stream = OpenAIStream(finalReponse)
    return new StreamingTextResponse(stream)

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
