import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './src/schema';
import Resolvers from './src/resolvers'

interface Context {
  Authorized: boolean
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers: Resolvers,
});

const tokens = ["secret"]

await startStandaloneServer(server, {
  listen: { 
    port: parseInt(process.env.PORT ?? '4000') 
  },
  context: async ({ req, res }) => {
    let token = req.headers.authorization || '';
    if(!token) return { Authorized: false }
    else {
      if(tokens.includes(token)) return { Authorized: true }
      else return { Authorized: false }
    }
  }
});

console.log(`🚀  Server ready at: http://localhost:${parseInt(process.env.PORT ?? '4000')}/graphql`);