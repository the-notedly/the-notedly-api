const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime

  type NoteFeed {
    notes: [Note!]!
    cursor: String!
    hasNextPage: Boolean!
  }

  type Note {
    id: ID!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    favoriteCount: Int!
    favoritedBy: [User!]!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
    favorites: [Note!]!
  }

  type Query {
    noteFeed(cursor: String): NoteFeed!
    notes: [Note!]!
    note(id: ID!): Note!
    user(username: String!): User
    users: [User!]!
    me: User!
  }

  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(email: String!, username: String!, password: String!): String!
    signIn(email: String, username: String, password: String!): String!
    toggleFavorite(id: ID!): Note!
  }
`;

module.exports = typeDefs;
