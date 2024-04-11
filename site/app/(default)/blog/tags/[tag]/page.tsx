import Config from "@/app.config"
import blog_utils from "@/utils/blog_utils"
import { BlogPostType } from "@/utils/blog_utils"
import BlogPostCard from "@/components/BlogPostCard"
import Paginator from "@/components/Paginator"
import { stringify } from "querystring"

export async function generateStaticParams() {
  type TagParam = { tag: string }

  const tags : TagParam[] = Array.from(await blog_utils.getTags()).sort().map((tag) => {
    return { tag }
  })

  return tags

}

export default async function Page({params}: {params: { tag: string }}){


  const allPostFiles = (await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)).reverse()

  const tagPostFiles:  BlogPostType[] = []

  for (const file of allPostFiles) {
    const post = await blog_utils.getPostFromFullFile(file)
    if (post.metadata.tags && post.metadata.tags.includes(params.tag)) {
      tagPostFiles.push(post)
    } 
  }

  const tagPostFilesSlice = tagPostFiles.slice(0, Config.PER_PAGE)

  return <div>
    <h1>Tag: {params.tag}</h1>
    {tagPostFilesSlice.map((post) => {
      return <BlogPostCard key={post.url} post={post} />
    })}
    <Paginator path={ "/blog/tags/" + params.tag } currentPage={0} totalEntries={tagPostFiles.length} />  
  </div>
}