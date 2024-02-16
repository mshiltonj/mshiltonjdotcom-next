import PageByOne from "@/components/PageByOne";
export default function Page() {
  return <div>
    <PageByOne next="/software_wars/archive/2003" current="February 2002" previous="/software_wars/archive/200010" last="/software_wars" />
    <img src="/images/software_wars/softwarewar_200202.png" />
    <PageByOne next="/software_wars/archive/2003" current="February 2002" previous="/software_wars/archive/200010" last="/software_wars" />
  </div>
}