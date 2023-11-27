const users = require('../../../../db/users.json')
const reviews = require('../../../../db/reviews.json')

const userQueries = {
  getUsers() {
    return users
  },
  getUser(_, args) {
    return users.find(user => user.id === args.id)
  },
}

const userChildrenQueries = {
  // type User

  User: {
    reviews(parent) {
      return reviews.filter(review => review.userId === parent.id)
    },
  },
}

module.exports = { userQueries, userChildrenQueries }
