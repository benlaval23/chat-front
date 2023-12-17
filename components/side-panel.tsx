'use client'

import { Button } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'
import { type SidePanelProps  } from '@/lib/types';


export function SidePanel({ source, close, cancel }: SidePanelProps) {
  return (
    <div className="fixed right-0 top-16 z-10 h-full w-10/12 border border-t-0 bg-gray-50 p-8 shadow-xl transition-transform duration-500 ease-out">
      <div className="mb-4 flex flex-row justify-between">
        <div>
          <h3 className="text-left text-xs font-semibold">Sources /</h3>
          <h1 className="text-left text-lg font-semibold">{source.name}</h1>
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
          <Button variant="ghost" className="mt-2 flex h-32 w-full justify-center rounded-lg border border-dashed border-gray-900/25 bg-white hover:bg-gray-100">
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
