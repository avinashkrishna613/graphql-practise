const {ApolloServer, gql} = require('apollo-server');
const resolvers = require('./resolver');
const typeDefs = require('./schema');
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen(3000).then(() => {
    console.log("resuest getting fulfilled");
});