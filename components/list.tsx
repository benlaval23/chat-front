'use client'
import { cn } from '@/lib/utils'
import { camelCaseToCapitalized } from '@/lib/utils'
import { OutputButton } from '@/components/ui/output-button'

export interface ListProps extends React.ComponentProps<'div'> {
  className?: string,
  output?: any
}


export function List({ className, output }: ListProps) {
  const length = output.length
  const firstThreeData = output.slice(0, 3)
  const keys = firstThreeData.length > 0 ? Object.keys(firstThreeData[0]) : []

  return (
    <div className={cn('rounded-lg border bg-background', className)}>
      <div className="px-4 py-6 sm:px-6 bg-gray-50 ">
        <h1 className="mb-2 text-lg font-semibold">Users</h1>
        <p className="mt-1 max-w-2xl leading-normal text-muted-foreground">
          Here is a list of your users.
        </p>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {keys.map(key => (
              <th
                key={key}
                scope="col"
                className="text-sm font-medium text-primary"
              >
                {camelCaseToCapitalized(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {firstThreeData.map((item, index) => (
            <>
              <tr key={index}>
                {keys.map(key => (
                  <td
                    key={key}
                    className="whitespace-nowrap px-3 py-4 text-muted-foreground"
                  >
                    {item[key]}
                  </td>
                ))}

                {length > 3 && (
                  
                <OutputButton name="See More" />
              )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
