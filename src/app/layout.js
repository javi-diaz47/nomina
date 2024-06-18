import Image from 'next/image'
import logo from '../../public/logo.png'

import { QueryProvider } from './components/QueryProvider'
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex items-center justify-center w-full h-screen italic font-extrabold bg-foreground">
        <QueryProvider>
          <Link href="/home">
            <Image
              src={logo}
              width="120"
              height="120"
              className="absolute right-3/4 bottom-3/4"
            />
          </Link>
          <div className="flex items-center justify-center w-[35vw] h-screen">
            {children}
          </div>

          <Link href="/home">
            <Image
              src={logo}
              width="120"
              height="120"
              className="absolute left-3/4 top-3/4"
            />
          </Link>
        </QueryProvider>
      </body>
    </html>
  )
}
