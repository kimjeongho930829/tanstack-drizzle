/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'
import appCss from '../styles/globals.css?url'
import poppins100 from "@fontsource/poppins/100.css?url"
import poppins200 from "@fontsource/poppins/200.css?url"
import poppins300 from "@fontsource/poppins/300.css?url"
import poppins400 from "@fontsource/poppins/400.css?url"
import poppins500 from "@fontsource/poppins/500.css?url"
import poppins600 from "@fontsource/poppins/600.css?url"
import poppins700 from "@fontsource/poppins/700.css?url"
import poppins800 from "@fontsource/poppins/800.css?url"
import poppins900 from "@fontsource/poppins/900.css?url"
import { ChartColumnBigIcon } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: "stylesheet", href: poppins100 },
      { rel: "stylesheet", href: poppins200 },
      { rel: "stylesheet", href: poppins300 },
      { rel: "stylesheet", href: poppins400 },
      { rel: "stylesheet", href: poppins500 },
      { rel: "stylesheet", href: poppins600 },
      { rel: "stylesheet", href: poppins700 },
      { rel: "stylesheet", href: poppins800 },
      { rel: "stylesheet", href: poppins900 },
    ]
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <nav className='bg-primary p-4 h-20 text-white flex items-center justify-between'>
          <Link to='/' className='flex gap-1 items-center font-blod text-2xl'>
            <ChartColumnBigIcon className='text-lime-500' /> TanTracker
          </Link>
        </nav>
        {children}
        <Scripts />
      </body>
    </html>
  )
}