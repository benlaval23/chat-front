import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/app/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { type Tab } from '@/lib/types'

export const metadata: Metadata = {
  title: {
    default: 'Chat Front',
    template: `Chat Front`
  },
  description: 'An AI-powered front end for your applicatons.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL("http://localhost:3000")
}


const tabs: Tab[] = [
  { name: 'Flow'},
  { name: 'Settings'},
]

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-muted/50">
            {/* @ts-ignore */}
            <Header tabs={tabs} />
            <main className="container mx-auto p-4">{children}</main>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
