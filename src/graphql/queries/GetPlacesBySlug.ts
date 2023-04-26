import { gql } from "graphql-request";

export const GET_PLACE_BY_SLUG = gql`
    query getPlaceBySlug($slug: String!) {
        place(where: { slug: $slug }) {
            id
            slug
            name
            location {
                latitude
                longitude
            }
            description {
                html
                text
            }
            gallery {
                url
                height
                width
            }
        }
    }
`