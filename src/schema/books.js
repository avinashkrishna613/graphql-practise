const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getBooks: [Book!]
    getBookByID(id:Int): Book!
  }
  type Book {
    title: String
    author: String
  }
`;
module.exports = typeDefs;
