import { BlogPostType } from "@/utils/blog_utils" 
import styles from "./styles.module.css"
export default function BlogPostCard({post, className}: {post: BlogPostType, className?: string}){

  className = className || ""

  console.log("className:", className)

  return <section key={Math.random()} className={className + " " + styles.blog_card }>
    <h1 className={ styles.h1 }>{post.metadata.title}</h1>
    <div>published: {(post.metadata.published as Date).toISOString().slice(0,10)}</div>
    <div className={ styles.blog_card_body } dangerouslySetInnerHTML={{__html: (post.content as string).split("<!--- break -->")[0] }} />
    <div><a href={post.url} className={ styles.more_link }>Read more...</a></div>
  </section> 
}