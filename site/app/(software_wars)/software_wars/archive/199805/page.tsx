import PageByOne from "@/components/PageByOne"
export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/199808" current="May 1998" previous="/software_wars/archive/199803" />
    <img src="/images/software_wars/softwarewar_199805.gif" />
    <PageByOne next="/software_wars/archive/199808" current="May 1998" previous="/software_wars/archive/199803" />
  </div>
}