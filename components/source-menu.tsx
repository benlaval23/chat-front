'use client'

import Image from 'next/image'
import { type Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'
import { IconPlus } from './ui/icons'

export interface Source {
  name: string
  imagePath: string
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

export function SourceMenu() {
  const [selectedSource, setSelectedSource] = useState(sources[0])

  const handleClick = (source: Source) => {
    console.log(source)
    setSelectedSource(source)
  }

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="pl-0">
            <Image
              className="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
              src={selectedSource.imagePath}
              alt={selectedSource.name}
              height={48}
              width={48}
            />
            <span className="ml-2">{selectedSource.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="end" className="w-[180px]">
          {sources.map((source, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem
                onClick={() => handleClick(source)}
                className="flex items-center"
              >
                <Image
                  className="align-center h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                  src={source.imagePath}
                  alt={source.name}
                  height={48}
                  width={48}
                />
                <div className="text-s ml-2 p-2 font-medium">{source.name}</div>
              </DropdownMenuItem>
              {index < sources.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-s flex items-center" onClick={() => console.log('new')}>
            <IconPlus className="align-center ml-1" />
            <div className="text-s ml-2 p-2 font-medium">New Source</div>

          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
