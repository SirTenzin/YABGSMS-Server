const typeDefs = `#graphql
    type User {
      id: Int!
      username: String!
      fullName: String!
    }

    type Post {
      id: Int!
      author: Int!
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
      post(id: Int!): Post
      user(id: Int!): User
    }

    type Mutation {
      createUser(username: String!, fullName: String!): User
      deleteUser(id: Int!): Boolean!
      updateUserName(id: Int!, username: String!): User
      updateUserFullName(id: Int!, fullName: String!): User

      createPost(author: Int!, title: String!, contentType: PostContentType!, content: String!): Post
      deletePost(id: Int!): Boolean!
      updatePostTitle(id: Int!, title: String!): Post
      updatePostContent(id: Int!, contentType: PostContentType!, content: String!): Post
    }
`;

export default typeDefs;
