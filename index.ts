import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './src/schema';
import { users, posts } from './src/data'

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  }, 
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port: number = parseInt(process.env.PORT ?? '4000');

await startStandaloneServer(server, {
  listen: { 
    port
 },
});

console.log(`🚀  Server ready at: http://localhost:${port}/graphql`);