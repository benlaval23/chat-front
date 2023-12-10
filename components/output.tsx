'use client';
import { cn } from '@/lib/utils';
import { Item } from '@/components/item';
import { List } from '@/components/list';

export interface OutputProps extends React.ComponentProps<'div'> {
  className?: string
}

export function Output({ className }: OutputProps) {
  return (
    <>
      <div className={cn('pb-[200px] mx-auto md:pt-10', className)}>
        <List/>
      </div>
    </>
  )
}
