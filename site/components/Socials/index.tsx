import Link from "next/link"
import Image from 'next/image'
import Panel from "../Panel"

import styles from "./styles.module.css"

export default function Social(){
  return <Panel title="Socials">
    <ul className={styles.social_links}>
      <li><Link href="https://www.linkedin.com/in/mshiltonj/"><Image src="/images/linkedin-icon.png" alt="" width="48" height="48" /></Link><Link href="https://www.linkedin.com/in/mshiltonj/">LinkedIn</Link></li>
      <li><Link href="https://www.linkedin.com/in/mshiltonj/"><Image src="/images/github-icon.png" alt="" width="48" height="48" /></Link><Link href="https://www.linkedin.com/in/mshiltonj/">Github</Link></li>
      <li><Link href="https://codepen.io/mshiltonj"><Image src="/images/codepen-icon.png" alt="" width="48" height="48" /></Link><Link href="https://codepen.io/mshiltonj">Codepen</Link></li>
      <li><Link href="https://mastodon.online/@mshiltonj"><Image src="/images/mastodon-icon.png" alt="" width="48" height="48" /></Link><Link href="https://mastodon.online/@mshiltonj">Mastodon</Link></li>
    </ul>
  </Panel>
}