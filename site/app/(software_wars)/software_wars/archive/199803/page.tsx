import PageByOne from "@/components/PageByOne"
export default function Page() {
  let pager = <PageByOne next="/software_wars/archive/199805" current="March 1998" last="/software_wars" />

  return <div>
    {pager}
    <img src="/images/software_wars/softwarewar_199803.gif" />
    {pager}  
  </div>
}