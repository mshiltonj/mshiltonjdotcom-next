import type { Metadata } from 'next'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<html>
    <head>
      <title>Softare Wars</title>
    </head>
    <body>
      {children}

      <aside>
      <h2>Earlier Maps (Andy Tai)</h2>
    <ul>
      <li><a href="./archive/20060129/">January 26, 2006</a></li>
      <li><a href="./archive/2003/">2003</a></li>
      <li><a href="./archive/200202/">February, 2002</a></li>
      <li><a href="./archive/200010/">October, 2000</a></li>
      <li><a href="./archive/200005/">May, 2000</a></li>
      <li><a href="./archive/199909/">September, 1999</a></li>
      <li><a href="./archive/199901/">January, 1999</a></li>
      <li><a href="./archive/199808/">August, 1998</a></li>
      <li><a href="./archive/199805/">May, 1998</a></li>
      <li><a href="./archive/199803">March, 1998</a></li>
    </ul>
      </aside>


      <aside>
        <p>
          <strong>More info about Free Software and general software freedom:</strong><br />
        </p>

        <ul>
          <li><a href="http://www.gnu.org/philosophy/free-sw.html">What is Free Software?</a></li>
          <li><a href="http://www.fsf.org/"><img src="./fsf.png" /></a><a href="http://www.fsf.org/">Free Software Foundation</a></li>
          <li><a href="http://www.gnu.org/"><img src="./gnu.jpg" /></a><a href="http://www.gnu.org/">GNU's Not Unix</a></li>
          <li><a href="http://www.gnu.org/copyleft/gpl.html">General Public License</a></li>
          <li><a href="http://www.opensource.org/"><br /><img src="./opensource.png" /></a><a href="http://www.opensource.org/">Open Source Initiative</a></li>
        </ul>
      </aside>
    </body>
  </html>
  )
}
