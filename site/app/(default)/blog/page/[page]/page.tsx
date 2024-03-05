import blog_utils from "@/utils/blog_utils"
import Config from "@/app.config"
import BlogPostCard from "@/components/BlogPostCard"
import Paginator from "@/components/Paginator"

export async function generateStaticParams(){
  const filesListing = (await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)).reverse().slice(Config.PER_PAGE)
  const numPages = Math.ceil(filesListing.length / Config.PER_PAGE)
  const dynamicParams = [...Array(numPages)].map((_, i) => { return {page: (i+1).toString()}})
  return dynamicParams
}

export default async function Page({ params }: {params: { page: string }}){
  const start = (parseInt(params.page)) * Config.PER_PAGE
  const end = start + Config.PER_PAGE
  const allFilesListing = (await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)).reverse()
  const thisPageFiles = allFilesListing.slice(start, end)
  const blogFiles = thisPageFiles

  let blogPosts = []
  for(const file of blogFiles){
    const parsedBlogPost = await blog_utils.getPostFromFullFile(file);
    blogPosts.push(parsedBlogPost)
  }

  return <div> 
    { blogPosts.map((blogPost) => {
      return <BlogPostCard post={blogPost} />
    })}
    <Paginator currentPage={parseInt(params.page)} totalEntries={allFilesListing.length} />
  </div>
}