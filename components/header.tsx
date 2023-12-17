import * as React from 'react'
import Link from 'next/link'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'
import { SourceMenu } from '@/components/source-menu'
import { TabsMenu } from '@/components/tabs-menu'
import { type Tab } from '@/lib/types'


export async function Header({ tabs }: { tabs: Tab[] }) {
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <div className="flex items-center">
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in?callbackUrl=/">Login</Link>
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          {session?.user && (
            <TabsMenu tabs={tabs}/>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          {session?.user && (
            <SourceMenu/>
          )}
        </div>
      </div>
    </header>
  )
}
