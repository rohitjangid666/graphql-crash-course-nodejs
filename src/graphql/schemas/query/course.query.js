const courseQuery = `#graphql
  type Query {
    getCourses: [Course]
    getCourse(id: ID!): Course
  }
`

module.exports = courseQuery
