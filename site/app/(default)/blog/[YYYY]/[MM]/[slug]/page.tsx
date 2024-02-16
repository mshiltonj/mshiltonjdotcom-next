import blogUtils from '../../../../../utils/blog_utils'

import styles from "./styles.module.css"

export async function generateStaticParams() {
  const dir = process.cwd() + "/posts"
  const entries = await blogUtils.deepDirListing(dir)

  let blogPosts : {slug: string, YYYY: string, MM: string }[] = []

  for (const file of entries ) {
    if (file == null) break
    if (file.match(/\.md$/) == null) break // skip non-markdown files

    const result = file.match(/(?<year>\d{4})\/(?<month>\d{2})\//)

    if (result == null) break
    let year : string | undefined
    let month : string | undefined 
    year = result.groups?.year
    month = result.groups?.month
    if (typeof month == "undefined" || typeof year == "undefined") break

    const slug : string = file.replace(/.*\//, "").replace(/\.md$/, "")
    blogPosts.push({
      slug: slug,
      YYYY: year,
      MM: month
    })
  }

  return(blogPosts)
}


export default async function Page({params}: { params: { slug: string, YYYY: string, MM: string, wat: string } }) {
  const post = await blogUtils.getPost(params.slug, params.YYYY, params.MM)
  return <div>
    <h1 className={styles.h1}>{ post.metadata.title } </h1>
    <div className={styles.blog_post} dangerouslySetInnerHTML={{__html: post.content }}></div>
  </div>
}