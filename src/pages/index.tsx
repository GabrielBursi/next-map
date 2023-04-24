import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import('../components/Map/Map').then((mod) => mod.MapComponent)
, { ssr: false })

export default function Home() {
  return <DynamicComponent />
}
