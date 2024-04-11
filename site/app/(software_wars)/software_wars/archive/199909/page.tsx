import PageByOne from "@/components/PageByOne"
import Image from "next/image"

export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/200005" current="September 1999" previous="/software_wars/archive/199901" last="/software_wars" />
    <Image alt="Software Wars Map" src="/images/software_wars/softwarewar_199909.gif" />
    <PageByOne next="/software_wars/archive/200005" current="September 1999" previous="/software_wars/archive/199901" last="/software_wars" />

  </div>
}