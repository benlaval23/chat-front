'use client'
import { cn } from '@/lib/utils'
import { camelCaseToCapitalized } from '@/lib/utils'
import { Field } from '@/components/ui/field'

export interface ItemProps extends React.ComponentProps<'div'> {
  className?: string,
  output?: object,
}

const objectName = 'Product'

export function Item({ className, output }: ItemProps) {
  return (
    <>
      <div
        className={cn(
          'rounded-lg border bg-background',
          className
        )}
      >
        <div className="px-4 py-6 sm:px-6 bg-gray-50 ">
		<h1 className="mb-2 text-lg font-semibold">{objectName}</h1>
          <p className="mt-1 max-w-2xl leading-normal text-muted-foreground">
            Here are the {objectName} details.
          </p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {Object.entries(output).map(([key, value]) => {
              if (Array.isArray(value)) {
                return (
                  <Field
                    item={camelCaseToCapitalized(key)}
                    value={value.join(', ')}
                    variant="array"
                  />
                )
              } else if (typeof value === 'object') {
                return (
                  <Field
                    item={camelCaseToCapitalized(key)}
                    value={String(value)}
                    variant="object"
                  />
                )
              } else {
                return (
                  <Field
                    item={camelCaseToCapitalized(key)}
                    value={String(value)}
                  />
                )
              }
            })}
          </dl>
        </div>
      </div>
    </>
  )
}
