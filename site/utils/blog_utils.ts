import fsPromises from 'fs/promises'
import { marked } from 'marked'
import parseMD from 'parse-md'

type PostMetadataType = {
  title: string,
  published?: Date | string,
  tags: string[],
  slug?: string,
}

type BlogPostType = {
  metadata: PostMetadataType,
  content: string,
  url: string,
}

async function deepDirListing(path : string, match: RegExp = /.*/) {
  let files : string[] = await fsPromises.readdir(path)
  let outgoingFiles : string[] = []
  for (const file of files){
    const fullPath = path + "/" + file
    const stat = await fsPromises.stat(fullPath)
    if (stat.isDirectory()) {
      const subDirFiles : string[] = await deepDirListing(fullPath, match)
      outgoingFiles = outgoingFiles.concat(subDirFiles)
    } else {
      if (file.match(match)) {
        outgoingFiles.push(fullPath)
      }
    }
  }
  return outgoingFiles.sort()
}

async function mostRecentlyPublishedPosts(count: number, files : string[] | null = null): Promise<string[]> {
  const filePublishTimes = new Map<string, Date>()

  if (files === null) {
    files = await deepDirListing(process.cwd() + "/posts", /.md$/)
  }

  for (const file of files) {
    const fh = await fsPromises.open(file, 'r')
    if (fh) {
      const fileContents = await fh.readFile({encoding: 'utf8'})
      fh.close()
      const { metadata } = parseMD(fileContents)
      const typedMetadata = metadata as PostMetadataType
      console.log("--------------file", file, typedMetadata.published)
      if (typedMetadata.published) {
        console.log("--------------file typed", file, typedMetadata.published)
        filePublishTimes.set(file, new Date(typedMetadata.published))
      }    
    }
  }

  console.log("--------------filePublishTimes", filePublishTimes)

  const sortedFiles = Array.from(filePublishTimes.entries()).sort((a, b) => {
    return b[1].getTime() - a[1].getTime()
  })

  console.log("--------------sortedFiles", sortedFiles)

  const mostRecentFiles = sortedFiles.slice(0, count).map((file) => {
    return file[0]
  })

  return mostRecentFiles
}

async function getMetadataFromFullFile(file: string){
  return await getDataFromFullFile(file, "meta") as PostMetadataType
}

async function getPostFromFullFile(file: string){
  return await getDataFromFullFile(file, "post") as BlogPostType
}

async function getDataFromFullFile(file: string, type: "meta" | "post" ) : Promise<PostMetadataType | BlogPostType>{
  const fh = await fsPromises.open(file, 'r')
  
  const [YYYY, MM, slug] = file.split("/").slice(-3).map((s) => {
    return s.replace(".md", "")
  })

  if (fh) {
    const fileContents = await fh.readFile({encoding: 'utf8'})
    fh.close()
    const { metadata, content } = parseMD(fileContents)

    if (type === "meta") {
      return metadata as PostMetadataType
    } else {
      const blogPost : BlogPostType = {
        metadata: metadata as PostMetadataType,
        content: marked.parse(content) as string,
        url: "/blog/" + YYYY + "/" + MM + "/" + slug
      }
      return blogPost
    }
  } else {
    throw new Error("File not found")
  }
}

async function getTags() : Promise<Set<string>> {
  const files = await deepDirListing(process.cwd() + "/posts", /.md$/)
  const tags = new Set<string>()
  for (const file of files) {
    const metadata = await getMetadataFromFullFile(file)
    if (metadata.tags) {
      for (const tag of metadata.tags) {
        tags.add(tag)
      }
    }

  }

  return tags
}

async function getPost(slug: string, YYYY: string, MM: string) {
  const file = process.cwd() + "/posts/" + YYYY + "/" + MM + "/" + slug + ".md"
  const blogPost = await getPostFromFullFile(file)
  return blogPost
}

export default {
  deepDirListing,
  getTags,
  getPost,
  getPostFromFullFile,
  getMetadataFromFullFile,
  mostRecentlyPublishedPosts  
}

export type { PostMetadataType , BlogPostType}