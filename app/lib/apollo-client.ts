import { ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://alumialab.com.br/wordpress/graphql",
    cache: new InMemoryCache(),
})