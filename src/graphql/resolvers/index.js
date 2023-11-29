const { courseQueries, courseChildrenQueries } = require('./query/course')
const { userQueries, userChildrenQueries } = require('./query/user')
const { reviewQueries, reviewChildrenQueries } = require('./query/review')
const { courseMutations } = require('./mutation/course')

const resolvers = {
  Query: {
    ...courseQueries,
    ...userQueries,
    ...reviewQueries,
  },
  ...courseChildrenQueries,
  ...reviewChildrenQueries,
  ...userChildrenQueries,
  Mutation: {
    ...courseMutations,
  },
}

module.exports = resolvers
