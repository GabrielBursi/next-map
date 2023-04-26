import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { client } from 'graphql/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/types'
import { ClientQueries } from 'graphql/queries'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Place({ place }: PlacesTemplateProps) {
    const router = useRouter()

    if (router.isFallback) return null

    return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
    const { places } = await client.request<GetPlacesQuery>(ClientQueries.GET_PLACES, {
        first: 3
    })

    const paths = places.map(({ slug }) => ({
        params: { slug }
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { place } = await client.request<GetPlaceBySlugQuery>(ClientQueries.GET_PLACE_BY_SLUG, {
            slug: `${params?.slug}`
        }
    )

    if (!place) return { notFound: true }

    return {
        revalidate: 60, // once per day
        props: {
            place
        }
    }
}