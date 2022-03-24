import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers.js' // resolvers.js 파일 생성

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

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;