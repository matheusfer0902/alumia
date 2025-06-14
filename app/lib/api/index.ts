import { client } from "@/app/lib/apollo-client";
import { gql } from "@apollo/client";

const { data } = await client.query({
    query: gql`
      query allPosts {
        posts (where: {orderby: {field: DATE, order: DESC}}){
            nodes {
                excerpt  
                id
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
});

export default data;
