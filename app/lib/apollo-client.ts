import { ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
    uri: "http://alumia.local/graphql",
    cache: new InMemoryCache(),
})