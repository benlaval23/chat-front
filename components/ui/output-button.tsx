import * as React from 'react'

export interface FieldProps extends React.ComponentProps<'div'> {
  name: string
}

function OutputButton({ name }: FieldProps) {
  return (
    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">
        {name}
      </a>
    </td>
  )
}

export { OutputButton }
