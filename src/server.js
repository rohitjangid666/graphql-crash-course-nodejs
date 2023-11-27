const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const typeDefs = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')
const config = require('./configs/config')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: config.port,
})
  .then(response => {
    console.log('Listening to port:', response.url)
  })
  .catch(error => console.log('error occurred at standaloneServer', error))
