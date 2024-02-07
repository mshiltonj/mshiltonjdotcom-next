import Image from 'next/image'
import Link from "next/link"
import styles from '../styles.module.css'

async function getPageData(){
  return [
    {
      "title": "Consequat proident nostrud labore amet sit.",
      "date": "2023-01-01",
      "blurb": "Anim incididunt fugiat Lorem eiusmod ex minim quis. Sit deserunt quis ex labore adipisicing commodo exercitation sunt. Magna culpa duis ea velit est.",
      "link": "https://google.com"
    },
    {
      "title": "Dolor adipisicing ad consectetur in do voluptate et.",
      "date": "2024-02-01",
      "blurb": "Aliquip sit nostrud qui consequat quis do. Labore cillum incididunt ut reprehenderit eiusmod occaecat dolor do Lorem pariatur nisi officia consequat sit. Nisi laborum Lorem velit enim in consequat excepteur ad fugiat qui sit. Ipsum aliqua sit reprehenderit duis ullamco voluptate culpa reprehenderit exercitation pariatur ad ex. Est officia in velit dolor elit ipsum irure duis cupidatat deserunt deserunt sit elit dolore. Enim in voluptate nostrud fugiat cupidatat aliquip ad culpa reprehenderit elit. Aliqua exercitation minim consectetur ex cillum excepteur eiusmod id minim ad fugiat do exercitation Lorem.",
      "link": "https://yahoo.com"
    },
  ]  
}

export default async function Home() {
  const pageData = await getPageData()

  return (
    <main className={styles.main}>
      { 
        pageData.map( (post) => (
          <section className={styles.section} key={Math.random()}>
            <div className={styles.date}>{post.date}</div>
            <div className={styles.title}>{post.title}</div> 
            <div>{post.blurb}</div> 
            <Link href={post.link}>Read More...</Link>
          </section>
        ))
      }
    </main>
  )
}

