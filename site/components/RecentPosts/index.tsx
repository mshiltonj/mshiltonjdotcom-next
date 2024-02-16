import Link from "next/link"
import blogUtils from "@/utils/blog_utils"
import { BlogPostType } from "@/utils/blog_utils"

import styles from "./styles.module.css"
import Panel from "../Panel"

async function loadPosts(postsData: string[]): Promise<BlogPostType[]>{
  const promises : Promise<BlogPostType>[] = postsData.map((postData) => {
    return blogUtils.getPostFromFullFile(postData)
  })

  const blogPosts : BlogPostType[] = await Promise.all(promises)
  return blogPosts
}

export default async function RecentPosts(){

  const postsData : string[] = await blogUtils.mostRecentlyPublishedPosts(5)
  const posts = await loadPosts(postsData)

  return <Panel title="Recent Posts">
    <ul>
      { posts.map((post : BlogPostType) => {
        return <li className={styles.li} key={post.url}><Link href={post.url}>{post.metadata.title}</Link></li>
      })}
    </ul>
  </Panel>
}