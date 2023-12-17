import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@/components/ui/icons'

const fieldVariants = cva(
  'mt-1 text-sm leading-6 text-muted-foreground sm:mt-0',
  {
    variants: {
      variant: {
        default: 'sm:col-span-2',
        object: 'sm:col-span-1',
        array: 'sm:col-span-1'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface FieldProps extends React.ComponentProps<'div'> {
  value?: string
  item: string
  variant?: any
}

function Field({ item, value, variant }: FieldProps) {
  
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-primary">{item}</dt>
      <dd className={cn(fieldVariants({ variant }))}>{value}</dd>
      {(variant === 'array' || variant === 'object') && (
        <Button
          key="See more"
          variant="link"
          className="flex h-auto grow items-center justify-end p-0 text-base "
        >
          See More
        </Button>
      )}
    </div>
  )
}

export { Field }
