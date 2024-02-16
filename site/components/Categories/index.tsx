import Link from "next/link"
import blog_util from "@/utils/blog_utils"


import Panel from "../Panel"
export default async function Categories(){
    const tags : string[] = Array.from(await blog_util.getTags()).sort()

    return <Panel title="Categories">
        <ul>
            { tags.map((tag) => {
                return <li>
                    <Link href={"/tags/" + tag}>{tag}</Link>
                </li>
            })}

        </ul>
    </Panel>
}