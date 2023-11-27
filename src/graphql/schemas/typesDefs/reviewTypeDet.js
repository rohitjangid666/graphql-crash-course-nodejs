const reviewTypeDef = `#graphql
  type Review {
    id: ID!
    rating: Int!
    content: String!
    createdAt: String!
    course: Course!
    user: User!
  }
`

module.exports = reviewTypeDef
