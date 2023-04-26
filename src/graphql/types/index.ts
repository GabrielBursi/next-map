export type GetPagesQuery = {
    __typename?: 'Query',
    pages: Array<{
        __typename?: 'Page',
        id: string,
        heading: string,
        slug: string,
        body: {
            __typename?: 'RichText',
            html: string
        }
    }>
};

export type GetPageBySlugQuery = {
    __typename?: 'Query',
    page: {
        __typename?: 'Page', id: string, slug: string, heading: string,
        body: {
            __typename?: 'RichText',
            html: string
        }
    } | null | undefined
};

export type GetPlacesQuery = {
    __typename?: 'Query',
    places: Array<{
        __typename?: 'Place', id: string, slug: string, name: string,
        location: {
            __typename?: 'Location', latitude: number, longitude: number
        }, description: {
            __typename?: 'RichText',
            html: string
        } | null | undefined,
        gallery: Array<
            {
                __typename?: 'Asset',
                url: string,
                height: number | null | undefined,
                width: number | null | undefined
            }>
    }>
};

export type GetPlaceBySlugQuery = {
    __typename?: 'Query',
    place: {
        __typename?: 'Place',
        id: string,
        slug: string,
        name: string,
        location: {
            __typename?: 'Location',
            latitude: number,
            longitude: number
        }, description: {
            __typename?: 'RichText',
            html: string,
            text: string
        } | null | undefined,
        gallery: Array<{
            __typename?: 'Asset',
            url: string,
            height: number | null | undefined,
            width: number | null | undefined
        }>
    } | null | undefined
};