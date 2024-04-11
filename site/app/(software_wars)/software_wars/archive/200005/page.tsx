import PageByOne from "@/components/PageByOne"
import Image from 'next/image'

export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/200010" current="May 2000" previous="/software_wars/archive/199909" last="/software_wars" />
    <Image alt="Software Wars Map" src="/images/software_wars/softwarewar_052000.gif" />
    <PageByOne next="/software_wars/archive/200010" current="May 2000" previous="/software_wars/archive/199909" last="/software_wars" />
  </div>
}