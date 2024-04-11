import PageByOne from "@/components/PageByOne"
import Image from 'next/image'

export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/200202" current="October 2000" previous="/software_wars/archive/200005" last="/software_wars" />
    <Image alt="Software Wars Map" src="/images/software_wars/softwarewar_200010.gif" />
    <PageByOne next="/software_wars/archive/200202" current="October 2000" previous="/software_wars/archive/200005" last="/software_wars" />
  </div>
}