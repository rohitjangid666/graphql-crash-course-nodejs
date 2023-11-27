const reviewQuery = `#graphql
  type Query {
    getReviews: [Review]
    getReview(id: ID!): Review
  }
`

module.exports = reviewQuery
