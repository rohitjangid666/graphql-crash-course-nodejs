const userTypeDef = `#graphql
  type User {
    id: ID!
    name: String!
    verified: Boolean!
    createdAt: String!
    reviews: [Review!]
  }
`

module.exports = userTypeDef
