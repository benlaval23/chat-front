'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { IconArrowRight, IconPlus } from '@/components/ui/icons'

export interface SettingsProps extends React.ComponentProps<'div'> {
  className?: string
}

const sources = [
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
  return (
    <div className={cn('pb-[200px] mx-auto md:pt-10', className)}>
      <div className="">
        <h1 className="mb-8 ml-2 text-lg font-semibold text-left">Sources</h1>
      </div>
      {sources.map((source, index) => (
        <React.Fragment key={index}>
          <div className="w-full mb-4">
            <div className="rounded-lg h-24 flex items-center justify-between pl-8 items-center border bg-background p-2">
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
        <div className="w-full mb-4">
          <div className="rounded-lg h-14 flex justify-center items-center pl-8 border bg-background p-2">
            <Button key="Configure" variant="link" size="lg">
              <IconPlus className="mr-1" />
              New Source
            </Button>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}
