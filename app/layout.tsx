import { Toaster } from 'sonner';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ConvexClient } from 'convex/browser'

import { ThemeProvider } from '@/components/ui/providers/theme-provider'
import { ConvexReactClientProvider } from '@/components/ui/providers/convex-providers'
import { ModalProvider } from '@/components/ui/providers/modal-provider';
import { EdgeStoreProvider } from '@/lib/edgestore';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'Jotion',
  description: 'The connected workspace where better faster work happens',
  icons:{
      icon:[
        {
          
          media:"(prefers-color-scheme: light)",
          url:"/logo.svg",
          href:"/logo.svg"
        },
     
          {
            media:"(prefers-color-scheme: dark)",
            url:"/logo-dark.svg",
            href:"/logo-dark.svg"
          },
      ]
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexReactClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='jotion-theme'
        >
          <Toaster position='bottom-center'/>
          <ModalProvider />
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexReactClientProvider>
        </body>
    </html>
  )
}
