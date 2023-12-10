import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Can I please see the following user details...',
    message: `Can I please see the following user details...`
  },
  {
    heading: 'Update x user name to y',
    message: 'Update x user name to y'
  },
  {
    heading: 'Send a product summary to x user',
    message: `Send a product summary to x users`
  }
]

interface EmptyScreenProps {
  setInput: UseChatHelpers['setInput']; // Assuming setInput is a function in UseChatHelpers
}

export function EmptyScreen({ setInput }: EmptyScreenProps)  {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
          <h1 className="mb-2 text-lg font-semibold">Chat Front</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Use this chat bot to view and edit your data
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
