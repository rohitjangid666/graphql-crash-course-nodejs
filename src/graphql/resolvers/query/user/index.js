const users = require('../../../../db/users.json')

const userQueries = {
  getUsers() {
    return users
  },
  getUser(_, args) {
    return users.find(user => user.id === args.id)
  },
}

module.exports = userQueries
