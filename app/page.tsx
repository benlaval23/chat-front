'use client';

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Output } from '@/components/output'
import { Settings } from '@/components/settings'
import { useState } from 'react'


export const runtime = 'edge'

const placeholderOutput = {
  id: '12',
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

// const output = [
//   {
//     name: 'Lindsay Walton',
//     title: 'Front-end Developer',
//     email: 'lindsay.walton@example.com',
//     role: 'Member'
//   },
//   {
//     name: 'Lindsay Walton',
//     title: 'Front-end Developer',
//     email: 'lindsay.walton@example.com',
//     role: 'Member'
//   },

//   {
//     name: 'Lindsay Walton',
//     title: 'Front-end Developer',
//     email: 'lindsay.walton@example.com',
//     role: 'Member'
//   },

//   {
//     name: 'Lindsay Walton',
//     title: 'Front-end Developer',
//     email: 'lindsay.walton@example.com',
//     role: 'Member'
//   }
// ]

const tabToShow: "Settings" | "Flow" = 'Flow'

export default function IndexPage() {
    const [output, setOutput] = useState(null)
    const [flow, setFlow] = useState([])


  const id = nanoid()

  return (
    <div className="flex justify-between pb-32">
      {(tabToShow === 'Flow') ? (
        <>
          <Chat className="left-panel basis-1/2 p-4" initialMessages={flow} setFlow={setFlow} flow={flow} setOutput={setOutput} id={id} output={output} />
          <Output
            className="right-panel basis-1/2 p-4"
            id={id}
            output={output}
          />
        </>
      ) : (
        <>
          <Settings className="w-full" />
        </>
      )}
    </div>
  )
}
