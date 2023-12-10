'use client'
import { cn } from '@/lib/utils'
import { camelCaseToCapitalized } from '@/lib/utils'
import { Field } from '@/components/ui/field'

export interface ItemProps extends React.ComponentProps<'div'> {
  className?: string
}

const objectName = 'Product'

const dummyItem = {
  id: '1',
  name: 'Item 1',
  description:
    'This items is a great item and it will be the best item that you will see of all items. You should buy this item.',
  price: 100,
  image: 'https://picsum.photos/200/300',
  tags: ['tag1', 'tag2', 'tag3'],
  category: [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' }
  ],
  sold: false,
  createdAt: '2021-01-01',
  metaData: { type: 'type1', value: 'value1' }
}

export function Item({ className }: ItemProps) {
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
            {Object.entries(dummyItem).map(([key, value]) => {
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
