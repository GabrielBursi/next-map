import Image from 'next/image'
import { CloseOutline } from "@styled-icons/evaicons-outline"
import LinkWrapper from "components/LinkWrapper/Link"
import * as S from './styles'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
    url: string
    height: number
    width: number
}

export type PlacesTemplateProps = {
    place: {
        slug: string
        name: string
        description?: {
            html: string
            text: string
        }
        gallery: ImageProps[]
    }
}


export default function PlacesTemplate({ place }: PlacesTemplateProps) {

    const router = useRouter()

    if(router.isFallback) return null

    return (
        <>
            <NextSeo
                title={`${place.name} - My Trips`}
                description={
                    place.description?.text ||
                    'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
                }
                canonical="https://next-map-orpin.vercel.app"
                openGraph={{
                    url: 'https://next-map-orpin.vercel.app',
                    title: `${place.name} - My Trips`,
                    description:
                        place.description?.text ||
                        'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
                    images: [
                        {
                            url: place.gallery[0].url,
                            width: place.gallery[0].width,
                            height: place.gallery[0].height,
                            alt: `${place.name}`
                        }
                    ]
                }}
            />
            <LinkWrapper href="/">
                <CloseOutline size={32} aria-label="Go back to map" />
            </LinkWrapper>

            <S.Wrapper>
                <S.Container>
                    <S.Heading>{place.name}</S.Heading>

                    <S.Body
                        dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
                    />

                    <S.Gallery>
                        {place.gallery.map((image, index) => (
                            <>
                                <Image
                                    key={`photo-${index}`}
                                    src={image.url}
                                    alt={place.name}
                                    width='800'
                                    height='400'
                                    quality={75}
                                />  
                                <br></br>
                            </>
                        ))}
                    </S.Gallery>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
