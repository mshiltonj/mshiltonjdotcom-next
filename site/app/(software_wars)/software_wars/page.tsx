import PageByOne from "@/components/PageByOne"
export default function Page() {
  return <div>
    <PageByOne previous="/software_wars/archive/2003" current="January 2006" />
    <img src="/images/software_wars/current.png" />
    <PageByOne previous="/software_wars/archive/2003" current="January 2006" />
  </div>
}