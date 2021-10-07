import {gql} from "apollo-server-core";
import {ApolloServer} from "apollo-server";

const port = 4000;

const db = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

const typeDefs = gql`
  # some comment
  
  type User {
    id: Int
    login: String
    pass: String
  }
  
  type Product {
    id: Int
    name: String
  }
  
  type PurchasesHistory {
    id: Int
    user_id: Int
    product_id: Int
  }
  
  type Query {
    users: [User]
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    users: () => [{id: 1, login: "Nikita", pass: "somePass"}]
  }
};

startApolloServer(typeDefs, resolvers);

async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}