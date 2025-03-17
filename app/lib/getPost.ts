import { gql } from "@apollo/client";
import {client} from "@/app/lib/apollo-client";

export interface Post {

    title: string;
  
    content: string;
  
    date: string;
  
    author: { node: { name: string } };
  
    categories: { edges: { node: { name: string } }[] };
  
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
            content
          }
        }
      }
    `,
    variables: { slug },
  });

  return data.posts.nodes.length > 0 ? data.posts.nodes[0] : null;
}
