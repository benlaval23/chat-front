'use client'

import { Button } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'


export interface SidePanelProp extends React.ComponentProps<'div'> {
  source: any
  close: any
  cancel: any
}

export function SidePanel({ source, close, cancel }: SidePanelProp) {
  return (
    <div className="p-8 bg-gray-50 fixed right-0 top-16 w-10/12 h-full border border-t-0 transform shadow-xl transition-transform duration-500 ease-out z-10">
      <div className="flex mb-4 flex-row justify-between">
        <div>
          <h3 className="text-xs font-semibold text-left">Sources /</h3>
          <h1 className="text-lg font-semibold text-left">{source.name}</h1>
        </div>
        <div>
          <Button variant="link" onClick={cancel} className="p-4">
            Cancel
          </Button>
          <Button onClick={close} className="p-4">
            Close
          </Button>
        </div>
      </div>
      <div>
        
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Upload Swagger file
          </label>
          <Button variant="ghost" className="mt-2 flex justify-center bg-white w-full h-32 hover:bg-gray-100 rounded-lg border border-dashed border-gray-900/25">
                <div className="text-center">
                    <IconPlus
                        className="mx-auto h-8 w-8 text-gray-300"
                        aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <p className="pl-1 font-bold">Upload a file</p>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                        JSON, XML file types supported
                    </p>
                </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
