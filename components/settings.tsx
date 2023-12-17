'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { IconArrowRight, IconPlus } from '@/components/ui/icons'
import { SidePanel } from '@/components/side-panel'
import { type SettingsProps, type Source  } from '@/lib/types';


const sources: Source[] = [
  {
    name: 'Shopify',
    imagePath: '/../public/shopify.webp'
  },
  {
    name: 'Hubspot',
    imagePath: '/../public/hubspot.webp'
  }
]

export function Settings({ className }: SettingsProps) {
  const [expandedSource, setExpandedSource] = useState<Source | null>(null)

  const handleSourceClick = (source: Source) => {
    setExpandedSource(source)
  }

  const newSource = () => {
    const newSource: Source = { name: 'New Source', imagePath: '' }
    sources.push(newSource)
    setExpandedSource(newSource)
  }

  const closePanel = () => {
    setExpandedSource(null)
  }

  const cancel = () => {
    setExpandedSource(null)
  }

  return (
    <div className={className}>
      <div>
        <h1 className="my-8 ml-2 text-left text-lg font-semibold">
          Sources
        </h1>
      </div>
      {sources.map((source, index) => (
        <React.Fragment key={index}>
          <div className="mb-4 w-full ">
            <div
              className="flex h-24 items-center justify-between rounded-lg border bg-background p-2 pl-8 hover:bg-gray-100"
              onClick={() => handleSourceClick(source)}
            >
              <div className="flex items-center">
                <Image
                  className="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                  src={source.imagePath}
                  alt={source.name}
                  height={48}
                  width={48}
                />
                <h1 className="ml-2 p-2 text-lg font-medium">{source.name}</h1>
              </div>
              <Button key="Configure" variant="link" size="lg">
                Configure
                <IconArrowRight className="ml-1" />
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
      <React.Fragment>
        <div className="mb-4 w-full ">
          <div
            className="flex h-24 items-center justify-end rounded-lg border bg-background p-2 pl-8 hover:bg-gray-100"
            onClick={() => newSource()}
          >
            <Button key="Configure" variant="link" size="lg">
              New Source
              <IconPlus className="ml-1" />
            </Button>
          </div>
        </div>
      </React.Fragment>
      {expandedSource && (
        <SidePanel source={expandedSource} close={closePanel} cancel={cancel} />
      )}
    </div>
  )
}
