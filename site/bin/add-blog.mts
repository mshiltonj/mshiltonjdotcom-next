#!/bin/env node
import fs from 'fs/promises'

const TEMPLATE_FILE = "script-templates/blog-entry.md";
console.log("adding blog entry")

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

const title = process.argv.slice(2).join(" ");
const published = date.toISOString().replace(/T/, " ").replace(/\..+/, "");

if (title === "") {
  // TODO PROMPT FOR TITLE
  console.error("ERROR: No title provided");
  process.exit(1);
}

const slug = title.toLowerCase().replace(/\s+/g, "-");

const tmplText = await fs.readFile(TEMPLATE_FILE, "utf-8");

const blogEntry = tmplText.
  replace("${title}", title).
  replace("${slug}", slug).
  replace("${published}", published)


const dir = `posts/${year}/${month}`;

const path = `${dir}/${slug}.md`;

console.log("New blog entry:", path)
await fs.mkdir(dir, { recursive: true });
await fs.writeFile(path, blogEntry);





