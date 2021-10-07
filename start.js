"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_1 = require("apollo-server");
const port = 4000;
const db = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const typeDefs = (0, apollo_server_core_1.gql) `
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
        users: () => [{ id: 1, login: "Nikita", pass: "somePass" }]
    }
};
startApolloServer(typeDefs, resolvers);
function startApolloServer(typeDefs, resolvers) {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
        const { url } = yield server.listen();
        console.log(`🚀 Server ready at ${url}`);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUF1QztBQUN2QyxpREFBMkM7QUFFM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ25DLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFFL0MsTUFBTSxRQUFRLEdBQUcsSUFBQSx3QkFBRyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3Qm5CLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7S0FDMUQ7Q0FDRixDQUFDO0FBRUYsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXZDLFNBQWUsaUJBQWlCLENBQUMsUUFBYSxFQUFFLFNBQWM7O1FBQzVELE1BQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FBQSJ9