const { GraphQLServerLambda } = require('graphql-yoga')
const { importSchema } = require('graphql-import')

const typeDefs = importSchema('./graphql/schema.graphql')

const resolvers = require('./graphql/resolvers')


const lambda = new GraphQLServerLambda({ 
  typeDefs,
  resolvers,
})

const callbackFilter = callback => (error, output) => {
  const headers = output.headers || {}
  headers['Access-Control-Allow-Origin'] = '*'
  // eslint-disable-next-line no-param-reassign
  output.headers = headers
  callback(error, output)
}

exports.server = (event, ctx, cb) => lambda.graphqlHandler(event, ctx, callbackFilter(cb))
exports.playground = (event, ctx, cb) => lambda.playgroundHandler(event, ctx, callbackFilter(cb))