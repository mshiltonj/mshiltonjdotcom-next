import blog_utils from "@/utils/blog_utils";
import Config from "@/app.config"
import BlogPostCard from "@/components/BlogPostCard";
import Paginator from "@/components/Paginator";

export default async function Page(){
  const start = 0
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
    <Paginator currentPage={0} totalEntries={allFilesListing.length} />
  </div>
}