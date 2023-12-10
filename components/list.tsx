'use client'
import { cn } from '@/lib/utils'
import { camelCaseToCapitalized } from '@/lib/utils'
import { OutputButton } from '@/components/ui/output-button'

export interface ListProps extends React.ComponentProps<'div'> {
  className?: string
}

const dummyList = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },

  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },

  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  }
]

export function List({ className }: ListProps) {
  const length = dummyList.length
  const firstThreeData = dummyList.slice(0, 3)
  const keys = firstThreeData.length > 0 ? Object.keys(firstThreeData[0]) : []

  return (
    <div
      className={cn(
        'overflow-hidden bg-white sm:rounded-lg shadow ring-1 ring-black ring-opacity-5',
        className
      )}
    >
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {keys.map(key => (
                <th
                  key={key}
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                      className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {item[key]}
                    </td>
                  ))}

                  {length > 3 && <OutputButton name="See More" />}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
