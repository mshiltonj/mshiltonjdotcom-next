import { BlogPostType } from "@/utils/blog_utils" 

export default function BlogPostCard({post}: {post: BlogPostType}){
  return <section key={Math.random()}>
    <div>published: {(post.metadata.published as Date).toISOString().slice(0,10)}</div>
    <h1>{post.metadata.title}</h1>
    <div dangerouslySetInnerHTML={{__html: (post.content as string).split("<!--- break -->")[0] }} />
    <div><a href={post.url}>Read more...</a></div>
  </section> 
}