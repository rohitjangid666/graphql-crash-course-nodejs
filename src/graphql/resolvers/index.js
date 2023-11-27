const { courseQueries, courseChildrenQueries } = require('./query/course')
const { userQueries, userChildrenQueries } = require('./query/user')
const { reviewQueries, reviewChildrenQueries } = require('./query/review')

const resolvers = {
  Query: {
    ...courseQueries,
    ...userQueries,
    ...reviewQueries,
  },
  ...courseChildrenQueries,
  ...reviewChildrenQueries,
  ...userChildrenQueries,
}

module.exports = resolvers
