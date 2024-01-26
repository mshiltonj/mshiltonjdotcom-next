import Link from "next/link"

import Panel from "../Panel"
export default function Categories(){
    return <Panel title="Categories">
        <ul>
            <li>
                <Link href="/foo">general</Link>
            </li>
            <li>
                <Link href="/foo">programming</Link>
            </li>
            <li>
                <Link href="/foo">kubernetes</Link>
            </li>
        </ul>

    </Panel>

}