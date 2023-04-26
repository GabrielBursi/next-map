import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

import { client } from 'graphql/client'
import { ClientQueries } from 'graphql/queries'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/types'

export default function Page({heading, body}: PageTemplateProps) {

    const router = useRouter()

    if(router.isFallback) return null

    return (
        <PageTemplate body={body} heading={heading}/>
    )
}

export const getStaticPaths = async () => {

    const {pages} = await client.request<GetPagesQuery>(ClientQueries.GET_PAGES, {first: 3})

    const paths = pages.map(({slug}) => ({
        params: {slug}
    }))

    return {
        paths,
        fallback:true
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { page } = await client.request<GetPageBySlugQuery>(ClientQueries.GET_PAGE_BY_SLUG, {
        slug: `${params?.slug}`
    })

    if(!page){
        return {notFound: true}
    }

    return {
        props:{
            heading: page.heading,
            body: page.body.html
        }
    }
}