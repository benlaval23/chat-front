'use client';
import { cn } from '@/lib/utils';
import { Item } from '@/components/item';
import { List } from '@/components/list';
import { type OutputProps } from '@/lib/types'

const renderOutput = (output: any) => {
  if (Array.isArray(output)) {
    return <List output={output}/>
  } else {
    return <Item output={output}/>
  }
}

export function Output({ className, output }: OutputProps) {
  return (
    <>
      <div className={cn('mx-auto pb-[200px] md:pt-10', className)}>
        {renderOutput(output)}
      </div>
    </>
  )
}
