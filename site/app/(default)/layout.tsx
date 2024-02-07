import type { Metadata } from 'next'
import '../globals.css'
import Link from 'next/link'

import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'mshiltonj.com',
  description: 'mshiltonj.com',
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
