const { ApolloServer } = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');
const typeDefs = require('./graphQL/typeDefs');
const resolvers = require('./graphQL/resolvers');

const pubsub = new PubSub();

const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: ({ req }) => ({ req, pubsub })
});

mongoose.connect(MONGODB)
 .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
 })
 .then(res => {
    console.log(`Server running at ${res.url}`);
 })
 .catch(err => console.error(err));
