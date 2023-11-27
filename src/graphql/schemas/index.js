// ** data types
// Int, Float, String, Boolean, ID

const courseTypeDef = require('./typesDefs/courseTypeDef')
const courseQuery = require('./typesDefs/query/course.query')

const reviewTypeDef = require('./typesDefs/reviewTypeDet')
const reviewQuery = require('./typesDefs/query/review.query')

const userTypeDef = require('./typesDefs/userTypeDef')
const userQuery = require('./typesDefs/query/user.query')

module.exports = [
  // type defs
  courseTypeDef,
  reviewTypeDef,
  userTypeDef,

  // queries
  courseQuery,
  reviewQuery,
  userQuery,
]
