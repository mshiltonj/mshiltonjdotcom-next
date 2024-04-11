import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import Panel from '@/components/Panel'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<html>
    <head>
      <title>Software Wars</title>
    </head>
    <body>
      <Link href="/software_wars">Software Wars</Link>
    <div><a href="/">&lt;&lt; mshiltonj.com</a></div>
    <h1>Software Wars</h1>
    <h2>A map depicting the epic struggle of Free and Open Source Software (FOSS) against the Empire of Microsoft</h2>
    <p>
      The original Software Wars Map, created by Andy Tai, began in 1998 when Netscape first announced it was going to open source the browser code. He updated it a couple times a year after that for a while. As often happens, Mr. Tai became too busy, and the Map was not updated for several years.
    </p>
    <p>Inspired by his original work, the Software Wars Map is now maintained here.</p>
    
    <p>The map was created using Inkscape and GIMP on Ubuntu Linux.</p>
      {children}

      <aside>
        <Panel title="About Software Freedom">
        <ul>
          <li><a href="http://www.gnu.org/philosophy/free-sw.html">What is Free Software?</a></li>
          <li><a href="http://www.fsf.org/"><Image alt="FSF logo" src="/images/fsf.png" /></a><a href="http://www.fsf.org/">Free Software Foundation</a></li>
          <li><a href="http://www.gnu.org/"><Image alt="GNU logo" src="/images/gnu.png" /></a><a href="http://www.gnu.org/">GNU&apos;s Not Unix</a></li>
          <li><a href="http://www.gnu.org/copyleft/gpl.html">General Public License</a></li>
          <li><a href="http://www.opensource.org/"><br /><Image alt="OSS Logo" src="/images/opensource.png" /></a><a href="http://www.opensource.org/">Open Source Initiative</a></li>
        </ul>
        </Panel>

      </aside>
    </body>
  </html>
  )
}
