import PageByOne from "@/components/PageByOne"
import Image from "next/image"

export default function Page() {
  let pager = <PageByOne next="/software_wars/archive/199909" current="January 1999" previous="/software_wars/archive/199808" last="/software_wars" />
  return <div>
    { pager }
    <Image alt="Software Wars Map" src="/images/software_wars/softwarewar_199901.gif" />
    { pager}
  </div>
}