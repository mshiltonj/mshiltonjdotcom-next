import Link from "next/link"
import blog_utils from "@/utils/blog_utils"


import Panel from "../Panel"
export default async function Categories(){
    const tags : string[] = Array.from(await blog_utils.getTags()).sort()

    return <Panel title="Categories">
        <ul>
            { tags.map((tag) => {
                return <li key={tag}>
                    <Link href={"/blog/tags/" + tag}>{tag}</Link>
                </li>
            })}

        </ul>
    </Panel>
}