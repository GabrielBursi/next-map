import Image from 'next/image'
import { CloseOutline } from "@styled-icons/evaicons-outline"
import LinkWrapper from "components/LinkWrapper/Link"
import * as S from './styles'
import { useRouter } from 'next/router'

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
                                    width={image.width}
                                    height={image.height}
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
