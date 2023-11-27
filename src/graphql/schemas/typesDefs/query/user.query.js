const userQuery = `#graphql
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
`

module.exports = userQuery
