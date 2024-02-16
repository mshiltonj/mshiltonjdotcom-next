import PageByOne from "@/components/PageByOne"
export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/200202" current="October 2000" previous="/software_wars/archive/200005" last="/software_wars" />
    <img src="/images/software_wars/softwarewar_200010.gif" />
    <PageByOne next="/software_wars/archive/200202" current="October 2000" previous="/software_wars/archive/200005" last="/software_wars" />
  </div>
}