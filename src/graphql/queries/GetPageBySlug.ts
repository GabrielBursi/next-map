import { gql } from "graphql-request";

export const GET_PAGE_BY_SLUG = gql`
    query getPageBySlug($slug: String!) {
        page(where: { slug: $slug }) {
            id
            slug
            heading
            body {
                html
            }
        }
    }
`