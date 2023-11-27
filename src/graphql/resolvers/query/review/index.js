const reviews = require('../../../../db/reviews.json')

const reviewQueries = {
  getReviews() {
    return reviews
  },
  getReview(_, args) {
    return reviews.find(review => review.id === args.id)
  },
}

module.exports = reviewQueries
