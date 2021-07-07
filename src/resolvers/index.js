const Query = require('./query');
const Mutation = require('./mutation');
const Note = require('./note');
const User = require('./user');
const { GraphQLDateTime } = require('graphql-scalars');

const resolvers = {
  Query,
  Mutation,
  Note,
  User,
  DateTime: GraphQLDateTime,
};

module.exports = resolvers;
