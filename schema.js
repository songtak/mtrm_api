// import { makeExecutableSchema } from 'graphql-tools';
var graphqlTools = require("graphql-tools");
const resolvers = require("./resolvers");

// import { resolvers } from "../resolvers.js"; // resolvers.js 파일 생성

const typeDefs = `
    type User {
        id: ID!
        name: String!
        birth_year: Int!
        sex: String!
    }

    type Query {
        allUser: [User]
    }
`;

const schema = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;

// export default schema;
