import { gql } from "graphql-request";

export const GET_PLACES = gql`
    query getPlaces($first: Int) {
        places(first: $first) {
            id
            slug
            name
            location {
                latitude
                longitude
            }
            description {
                html
            }
            gallery {
                url
                height
                width
            }
        }
    }
`