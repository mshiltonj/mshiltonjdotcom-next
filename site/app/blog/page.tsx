import blog_utils from "@/utils/blog_utils";



export default async function Page(){
  const recentBlogFiles = await blog_utils.mostRecentlyPublishedPosts(10);
  let recentBlogPosts = []
  for(const file of recentBlogFiles){
    const parsedBlogPost = await blog_utils.getPostFromFullFile(file);
    recentBlogPosts.push(parsedBlogPost)
  }


//   <section className={styles.section} key={Math.random()}>
//   <div className={styles.date}>{post.date}</div>
//   <div className={styles.title}>{post.title}</div> 
//   <div>{post.blurb}</div> 
//   <Link href={post.link}>Read More...</Link>
// </section>

  return <div>
    {
      recentBlogPosts.map((post) => (
      <section key={Math.random()}>
        <div>published: {(post.metadata.published as Date).toISOString().slice(0,10)}</div>
        <h1>{post.metadata.title}</h1>
        <div dangerouslySetInnerHTML={{__html: (post.content as string).split("<!--- break --->")[0] }} />
        <div><a href={post.url}>Read more...</a></div>
      </section>        
      ))
    }
  </div>
}