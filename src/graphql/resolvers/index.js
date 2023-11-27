const courseQueries = require('./query/course')
const userQueries = require('./query/user')
const reviewQueries = require('./query/review')

const resolvers = {
  Query: {
    ...courseQueries,
    ...userQueries,
    ...reviewQueries,
  },
}

module.exports = resolvers
