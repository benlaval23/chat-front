'use client'
import { cn } from '@/lib/utils'
import { Item } from '@/components/item'
import { List } from '@/components/list'
import { type OutputProps } from '@/lib/types'

const renderOutput = (output: any) => {
  if (Array.isArray(output)) {
    return <List output={output} />
  } else {
    return <Item output={output} />
  }
}

export function Output({ className, output }: OutputProps) {
  return (
    <div className={cn('mx-auto pb-[200px] md:pt-10', className)}>
      {output ? (
        renderOutput(output)
      ) : (
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-lg border bg-background p-8">
            <h1 className="mb-2 text-lg font-semibold">Output</h1>
            <p className="mb-2 leading-normal text-muted-foreground">
              The data output will be displayed here
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
