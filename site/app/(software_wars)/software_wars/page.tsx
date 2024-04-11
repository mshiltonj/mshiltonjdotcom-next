import PageByOne from "@/components/PageByOne"
import Image from 'next/image'
export default function Page() {
  return <div>
    <PageByOne previous="/software_wars/archive/2003" current="January 2006" />
    <Image alt="Software Wars Map" src="/images/software_wars/current.png" />
    <PageByOne previous="/software_wars/archive/2003" current="January 2006" />
  </div>
}