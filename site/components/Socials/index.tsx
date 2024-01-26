import Link from "next/link"
import Panel from "../Panel"

export default function Social(){
  return <Panel title="Socials">
    <ul>
      <li><Link href="">LinkedIn</Link></li>
      <li><Link href="">Github</Link></li>
      <li><Link href="">Codepen</Link></li>
      <li><Link href="">Mastodon</Link></li>
    </ul>
  </Panel>
}