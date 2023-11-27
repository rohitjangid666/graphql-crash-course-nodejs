const reviews = require('../../../../db/reviews.json')
const courses = require('../../../../db/courses.json')
const users = require('../../../../db/users.json')

const reviewQueries = {
  getReviews() {
    return reviews
  },
  getReview(_, args) {
    return reviews.find(review => review.id === args.id)
  },
}

const reviewChildrenQueries = {
  // type Review

  Review: {
    course(parent) {
      return courses.find(course => course.id === parent.courseId)
    },
    user(parent) {
      return users.find(user => user.id === parent.userId)
    },
  },
}

module.exports = { reviewQueries, reviewChildrenQueries }
