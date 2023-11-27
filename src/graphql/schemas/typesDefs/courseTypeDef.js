const courseTypeDef = `#graphql
  type Course {
    id: ID!
    name: String!
    createdAt: String!
    reviews: [Review!]
  }
`

module.exports = courseTypeDef
