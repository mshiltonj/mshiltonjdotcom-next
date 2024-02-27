import blog_utils from '@/utils/blog_utils'
import BlogPostCard from '@/components/BlogPostCard'
import dates from '@/utils/dates'

export async function generateStaticParams(){
  const blogDirs = await blog_utils.deepDirOnlyDirs(process.cwd() + "/posts")
  const blogDates = blogDirs.map((dir) => {
    const [YYYY, MM] = dir.split("/").slice(-2)
    if (MM.length <= 2){
      return { YYYY, MM }
    }
  }).filter((date) => typeof date !== "undefined" )

  console.log("blogDatesss", blogDates)

  return blogDates
}

export default async function Page({params}: {params: { YYYY: string, MM: string }}){
  const files = (await blog_utils.deepDirListing(process.cwd() + "/posts/" + params.YYYY + "/" + params.MM, /.md$/))
  let blogPosts = []
  for(const file of files){
    const parsedBlogPost = await blog_utils.getPostFromFullFile(file);
    blogPosts.push(parsedBlogPost)
  }

  return <div>
   <h1>{dates.monthNumToString(params.MM)}, { params.YYYY }</h1>
    { blogPosts.map((blogPost) => {
      return <BlogPostCard post={blogPost} />
    })}

    

  </div>
  
}