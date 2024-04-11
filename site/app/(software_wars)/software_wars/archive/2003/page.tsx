import PageByOne from "@/components/PageByOne"
import Image from 'next/image'

export default function Page() {
  return <div>
    <PageByOne next="/software_wars/" current="2003" previous="/software_wars/archive/200202" last="/software_wars" />
    <Image alt="Software Wars Map" src="/images/software_wars/2003-softwarewar.png" />
    <PageByOne next="/software_wars/" current="2003" previous="/software_wars/archive/200202" last="/software_wars" />
  </div>
}