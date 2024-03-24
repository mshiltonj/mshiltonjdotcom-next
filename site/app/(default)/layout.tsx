import type { Metadata } from 'next'
import '@/app/(default)/globals.css'
import Link from 'next/link'

import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

export const metadata: Metadata = {
  title: 'mshiltonj.com',
  description: 'mshiltonj.com',
  icons: [
    {
      url: '/favicon.ico?3',
      sizes: 'any',
      type: 'image/x-icon',
    } ,
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
      <Header />
      <Nav />
      <div className='pri'>
        <Aside />
        {children}
      </div>
      <Footer />
        </body>
    </html>
  )
}
