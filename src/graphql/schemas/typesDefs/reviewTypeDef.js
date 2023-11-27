const reviewTypeDef = `#graphql
  type Review {
    id: ID!
    rating: Float!
    content: String!
    createdAt: String!
    course: Course!
    user: User!
  }
`

module.exports = reviewTypeDef
