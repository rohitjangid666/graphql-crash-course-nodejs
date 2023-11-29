const courseMutation = `#graphql
  input AddCourseInput {
    name: String!,
  }

  input EditCourseInput {
    name: String
  }

  type Mutation {
    deleteCourse(id: ID!): [Course]
    addCourse(input: AddCourseInput): Course
    updateCourse(id: ID!, input: EditCourseInput): Course
  }
`

module.exports = courseMutation
