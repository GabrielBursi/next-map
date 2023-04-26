import { MapProps } from "components/Map/Map";
import { client } from "graphql/client";
import { ClientQueries } from "graphql/queries";
import { GetPlacesQuery } from "graphql/types";
import HomeTemplate from "templates/Home";

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(ClientQueries.GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}