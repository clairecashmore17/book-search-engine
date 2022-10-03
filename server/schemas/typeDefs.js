//import our gql tagged template

const { gql } = require("apollo-server-express");

//create our typeDefs

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
  input bookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    link: String
  }
  #   Mutations
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
