import Link from "next/link";
import blog_utils from "@/utils/blog_utils";
import dates from "@/utils/dates";

export async function generateStaticParams() {

}

export default async function Page(){
  const files = await blog_utils.deepDirListing(process.cwd() + "/posts", /.md$/)

  const filesByYear = new Map<string, string[]>()

  files.reverse().map((file) => {
    const year = file.split("/").at(-3)
    const month = file.split("/").at(-2)
    
    if (year && month){
      if (filesByYear.has(year)) {
        if (!filesByYear.get(year)?.includes(month)){
          filesByYear.get(year)?.push(month)
        }
      } else {
        filesByYear.set(year, [month])
      }
    }
  })





  return <div>
    <h1>Archives</h1>
    { Array.from(filesByYear.keys()).map((year) => {
      return <div>
        <div>{year}</div>
          { filesByYear.get(year)?.map((month) => {
              return <span>
                <Link href={`/blog/${year}/${month}`}>{dates.monthNumToString(month)}</Link> 
              </span>
          })}        
        </div>
    }) }   
  </div>
}