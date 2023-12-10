import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Output } from '@/components/output'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <div className="flex justify-between">
      <Chat className="left-panel p-4 basis-1/2" id={id}/>
      <Output className="right-panel p-4 basis-1/2" id={id}/>
    </div>
  )
}
