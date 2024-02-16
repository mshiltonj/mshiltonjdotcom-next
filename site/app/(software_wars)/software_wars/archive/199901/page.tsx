import PageByOne from "@/components/PageByOne"
export default function Page() {
  let pager = <PageByOne next="/software_wars/archive/199909" current="January 1999" previous="/software_wars/archive/199808" last="/software_wars" />
  return <div>
    { pager }
    <img src="/images/software_wars/softwarewar_199901.gif" />
    { pager}
  </div>
}