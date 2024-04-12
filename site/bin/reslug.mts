
import fs from 'fs/promises';
import parseMD from 'parse-md'

import path from 'path';

if (process.argv.length < 3) {
  console.error("Usage: reslug.mts <file>")
  process.exit(1)
}

const oldSlugFile = path.join(process.cwd(), process.argv[2]);

try {
  await fs.stat(oldSlugFile)
} catch (e) {
  console.error(`File ${oldSlugFile} does not exist`)
  process.exit(1)  
}

const fileContents = await fs.readFile(oldSlugFile, 'utf8')
const { metadata } = parseMD(fileContents) as { metadata: { title: string } }
const newSlug = metadata.title.toLowerCase().replace(/ /g, "-") + ".md"
const newSlugFile = oldSlugFile.replace(/[^\/]*$/, newSlug)

if (oldSlugFile === newSlugFile) {
  console.error("No change in slug")
  process.exit(1)
}

// TODO: change date in path

await fs.rename(oldSlugFile, newSlugFile)