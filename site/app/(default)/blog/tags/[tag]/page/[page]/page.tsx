
import Config from "@/app.config"
import blog_utils from "@/utils/blog_utils"
import { BlogPostType } from "@/utils/blog_utils"
import BlogPostCard from "@/components/BlogPostCard"
import Paginator from "@/components/Paginator"

export async function generateStaticParams() {

  const tagCounts = new Map<string, number>()

  const filesListing = (await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)).reverse()

  for (const file of filesListing) {
    const post = await blog_utils.getPostFromFullFile(file)
    if (post.metadata.tags) {
      for (const tag of post.metadata.tags) {
        if (tagCounts.has(tag)) {
          tagCounts.set(tag, tagCounts.get(tag) + 1)
        } else {
          tagCounts.set(tag, 1)
        }
      }
    }
  }

  let dynamicParams: { tag: string, page: string}[] = []

  tagCounts.forEach((count, tag) => {
    const numPages = Math.ceil(count / Config.PER_PAGE)
    const tagPageAry = [...Array(numPages)].map((_, i) => { return {page: (i+1).toString(), tag: tag}})
    dynamicParams = dynamicParams.concat(tagPageAry)
  })

  // console.log("dynamicParams:", dynamicParams)
  return dynamicParams
}

export default async function Page({params}: {params: { tag: string, page: string}}){
  const pageInt = parseInt(params.page)
  const allPostFiles = (await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)).reverse()

  const tagPostFiles:  BlogPostType[] = []

  for (const file of allPostFiles) {
    const post = await blog_utils.getPostFromFullFile(file)
    if (post.metadata.tags && post.metadata.tags.includes(params.tag)) {
      tagPostFiles.push(post)
    }
  }
  console.log("tagPostFilesLength:", tagPostFiles.length)
  console.log("pageInt:", pageInt)
  console.log("Config.PER_PAGE:", Config.PER_PAGE)
  const start = pageInt * Config.PER_PAGE
  const end = start + Config.PER_PAGE
  const pagedTagPostFiles = tagPostFiles.slice(start, end)
  console.log("pagedTagPostFiles:", pagedTagPostFiles)

  return <div>
    <h1>Tag: {params.tag}</h1>
    {pagedTagPostFiles.map((post) => {
      return <BlogPostCard post={post} />
    })}
    <Paginator path={ "/blog/tags/" + params.tag } currentPage={pageInt} totalEntries={tagPostFiles.length} />  
  </div>
}