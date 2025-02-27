const typeDefs = `#graphql
    type User {
      id: ID!
      username: String!
      fullName: String!
    }

    type Post {
      id: ID!
      title: String!
      content: PostContent!
    }


    type PostContent {
      type: PostContentType!
      data: String!
    }

    enum PostContentType {
      IMAGE,
      TEXT
    }

    type Query {
        users: [User]
        posts: [Post]
    }
`;

export default typeDefs;