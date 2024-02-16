import PageByOne from "@/components/PageByOne"
export default function Page() {
  let pager = <PageByOne next="/software_wars/archive/199909" current="August 1998" previous="/software_wars/archive/199805" last="/software_wars" />

  return <div>
    { pager }
    <img src="/images/software_wars/softwarewar_199808.gif" />
    { pager }
  </div>
}