'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TabsMenu({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleSelectTab = tab => {
    setSelectedTab(tab)
  }

  return (
    <div className="hidden sm:block">
      {tabs.map(tab => (
        <Button
          variant="ghost"
          onClick={() => handleSelectTab(tab)}
          className={classNames(
            tab === selectedTab ? 'bg-gray-200' : 'text-gray-600',
            'rounded-md m-2'
          )}
        >
          <a
            key={tab.name}
            className={classNames(
              tab === selectedTab ? 'text-gray-800' : 'hover:text-gray-800',
              'text-sm font-medium'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        </Button>
      ))}
    </div>
  )
}
