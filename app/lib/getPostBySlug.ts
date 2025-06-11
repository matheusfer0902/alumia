import { gql } from "@apollo/client";
import {client} from "@/app/lib/apollo-client";

export interface Post {
    title: string;  
    slug: string;
    featuredImage: { node: { id: string; sourceUrl: string; } | null; /* Pode ser null se não tiver imagem destacada */
    } | null;
    categories: { edges: { node: { id: string; name: string; slug: string; } }[] };
    author: { node: { name: string } };  
    date: string;  
    modified: string;
    content: string;  
  }

export async function getPostBySlug(slug: string) {
  const { data } = await client.query({
    query: gql`
      query getPostBySlug($slug: String!) {
        posts(where: { name: $slug }) {
          nodes {
            title
            slug
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
              }
            }
            date
            modified
            content
          }
        }
      }
    `,
    variables: { slug },
    fetchPolicy: "no-cache",
  });

  return data.posts.nodes.length > 0 ? data.posts.nodes[0] : null;
}
