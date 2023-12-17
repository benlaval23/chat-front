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
        <h1 className="mb-8 mt-8 ml-2 text-lg font-semibold text-left">
          Sources
        </h1>
      </div>
      {sources.map((source, index) => (
        <React.Fragment key={index}>
          <div className="w-full mb-4 ">
            <div
              className="rounded-lg h-24 flex items-center justify-between pl-8 items-center border bg-background hover:bg-gray-100 p-2"
              onClick={() => handleSourceClick(source)}
            >
              <div className="flex items-center">
                <Image
                  className="w-6 h-6 transition-opacity duration-300 rounded-full select-none ring-1 ring-zinc-100/10 hover:opacity-80"
                  src={source.imagePath}
                  alt={source.name}
                  height={48}
                  width={48}
                />
                <h1 className="text-lg p-2 ml-2 font-medium">{source.name}</h1>
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
        <div className="w-full mb-4 ">
          <div
            className="rounded-lg h-24 flex items-center justify-end pl-8 items-center border bg-background hover:bg-gray-100 p-2"
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
