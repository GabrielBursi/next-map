import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline";
import LinkWrapper from "components/LinkWrapper/Link";
import { MapProps } from "components/Map/Map";

const DynamicMapComponent = dynamic<MapProps>(
    () => import('components/Map/Map').then(module => module.default),
    { ssr: false }
);

export default function HomeTemplate({ places }: MapProps) {
    return (
        <>
            <LinkWrapper href="/about">
                <InfoOutline size={32} aria-label="About" />
            </LinkWrapper>
            <DynamicMapComponent places={places} />
        </>
    )
}