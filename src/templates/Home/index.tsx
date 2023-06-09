import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline";
import { NextSeo } from "next-seo";
import LinkWrapper from "components/LinkWrapper/Link";
import { MapProps } from "components/Map/Map";

const DynamicMapComponent = dynamic<MapProps>(
    () => import('components/Map/Map').then(module => module.default),
    { ssr: false }
);

export default function HomeTemplate({ places }: MapProps) {
    return (
        <>
            <NextSeo
                title="My Trips"
                description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
                canonical="https://next-map-orpin.vercel.app"
                openGraph={{
                    url: 'https://next-map-orpin.vercel.app',
                    title: 'My Trips',
                    description:
                        'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
                    images: [
                        {
                            url: 'https://my-trips.willianjusten.com.br/img/cover.png',
                            width: 1280,
                            height: 720,
                            alt: 'My Trips'
                        }
                    ],
                    site_name: 'My Trips'
                }}
            />
            <LinkWrapper href="/about">
                <InfoOutline size={32} aria-label="About" />
            </LinkWrapper>
            <DynamicMapComponent places={places} />
        </>
    )
}