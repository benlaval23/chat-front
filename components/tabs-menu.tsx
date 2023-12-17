'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tab } from '@/lib/types'

function classNames(...classes: (string | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function TabsMenu({ tabs }: { tabs: Tab[] }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleSelectTab = (tab: Tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className="hidden sm:block">
      {tabs.map((tab: Tab, index: any) => (
        <Button
          key={index}
          variant="ghost"
          onClick={() => handleSelectTab(tab)}
          className={classNames(
            tab === selectedTab ? 'bg-gray-200' : 'text-gray-600',
            'rounded-md m-2'
          )}
        >
          <a
            className={classNames(
              tab === selectedTab ? 'text-gray-800' : 'hover:text-gray-800',
              'text-sm font-medium'
            )}
          >
            {tab.name}
          </a>
        </Button>
      ))}
    </div>
  )
}
