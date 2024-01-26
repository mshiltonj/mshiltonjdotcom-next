import fsPromises from 'fs/promises'
import { marked } from 'marked'
import parseMD from 'parse-md'

import styles from "./styles.module.css"


async function getDeepDirListing(path : string, match: RegExp = /.*/) {
  let files : string[] = await fsPromises.readdir(path)
  let outgoingFiles : string[] = []
  for (const file of files){
    const fullPath = path + "/" + file
    console.log("FILE " + fullPath)
    const stat = await fsPromises.stat(fullPath)
    if (stat.isDirectory()) {
      const subDirFiles : string[] = await getDeepDirListing(fullPath, match)
      outgoingFiles = outgoingFiles.concat(subDirFiles)
    } else {
      if (file.match(match)) {
        outgoingFiles.push(fullPath)
      }
    }
  }
  return outgoingFiles.sort()
}

export async function generateStaticParams() {
  console.log("PWD " + process.cwd())
  const dir = process.cwd() + "/posts"
  const entries = await getDeepDirListing(dir)
  console.log("FILESd--------------------------------------------------------------\n")
  console.log(entries)

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
    console.log("SLUG " + slug)
    blogPosts.push({
      slug: slug,
      YYYY: year,
      MM: month
    })
  }

  console.log(blogPosts)
  return(blogPosts)
}


async function getPost(slug: string, YYYY: string, MM: string) {
  const file = process.cwd() + "/posts/" + YYYY + "/" + MM + "/" + slug + ".md"
  const fh = await fsPromises.open(file, 'r')

  type PostMetaData = {
    title: string,
    published?: string,
    slug?: string,
  }

  if (fh) {
    const fileContents = await fh.readFile({encoding: 'utf8'})
    fh.close()
    const { metadata, content }   = parseMD(fileContents)

    return { metadata: metadata as PostMetaData, content: marked.parse(content)} 
  } else {
    throw new Error("File not found")
  }



}

export default async function Page({params}: { params: { slug: string, YYYY: string, MM: string, wat: string } }) {

  const post = await getPost(params.slug, params.YYYY, params.MM)
  return <div>
    <h1 className={styles.h1}>{ post.metadata.title } </h1>
    <div className={styles.blog_post} dangerouslySetInnerHTML={{__html: post.content }}></div>
  </div>
}