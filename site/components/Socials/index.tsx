import Link from "next/link"
import Image from 'next/image'
import Panel from "../Panel"

export default function Social(){
  return <Panel title="Socials">
    <ul>
      <li><Image src="/images/linkedin-icon.png" alt="" width="48" height="48" /><Link href="">LinkedIn</Link></li>
      <li><Image src="/images/github-icon.png" alt="" width="48" height="48" /><Link href="">Github</Link></li>
      <li><Image src="/images/codepen-icon.png" alt="" width="48" height="48" /><Link href="">Codepen</Link></li>
      <li><Image src="/images/mastodon-icon.png" alt="" width="48" height="48" /><Link href="">Mastodon</Link></li>
    </ul>
  </Panel>
}