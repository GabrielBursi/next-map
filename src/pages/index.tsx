import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper/Link";

const DynamicMapComponent = dynamic(() =>
  import('../components/Map/Map').then((mod) => mod.default)
, { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About"/>
      </LinkWrapper>
      <DynamicMapComponent />
    </>
  )
}
