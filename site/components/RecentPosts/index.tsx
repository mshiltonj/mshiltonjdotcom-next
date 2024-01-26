import Link from "next/link"

import Panel from "../Panel"
export default function RecentPosts(){
    return <Panel title="Recent Posts">
        <ul>
            <li><Link href="/blog/first-post">First Post</Link></li>
            <li><Link href="/blog/second-post">Second Post</Link></li>
            <li><Link href="/blog/third-post">Third Post</Link></li>
        </ul>
    </Panel>
}