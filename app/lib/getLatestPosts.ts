import { gql } from "@apollo/client";
import {client} from "@/app/lib/apollo-client";

export interface Post {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    } | null;
  } | null; // Em alguns casos, a imagem pode ser null
}

export async function getLatestPosts(limit: number): Promise<Post[]> {
  const { data } = await client.query({
    query: gql`
      query getLatestPosts($limit: Int!) {
        posts(first: $limit, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
    variables: { limit },
    fetchPolicy: "no-cache",
  });

  return data.posts.nodes;
}
