'use client'

import { useChat, type Message } from 'ai/react'
import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { toast } from 'react-hot-toast'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  setOutput: any
  setFlow: any
  id?: string
  output?: any
}

export function Chat({ id, initialMessages, setFlow, setOutput, className, output }: ChatProps) {

  const { messages, append, reload, stop, isLoading, input, setInput, data } =
    useChat({
      initialMessages,
      id,
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
        console.log(response)
      },
      onFinish(message: any) {
      }
    })

  const dataMessages = data as { message: string }[] | undefined;
  if (dataMessages) {
    setOutput(dataMessages[0])
    setFlow(messages)

  }

  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  )
}
