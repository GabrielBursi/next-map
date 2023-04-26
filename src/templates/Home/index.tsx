import { InfoOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper/Link";
import MapComponent, { MapProps } from "components/Map/Map";

export default function HomeTemplate({ places }: MapProps) {
    return (
        <>
            <LinkWrapper href="/about">
                <InfoOutline size={32} aria-label="About" />
            </LinkWrapper>
            <MapComponent places={places} />
        </>
    )
}