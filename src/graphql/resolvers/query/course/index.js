const courses = require('../../../../db/courses.json')
const reviews = require('../../../../db/reviews.json')

const courseQueries = {
  getCourses() {
    return courses
  },
  getCourse(_, args) {
    return courses.find(course => course.id === args.id)
  },
}

const courseChildrenQueries = {
  // type Course
  Course: {
    reviews(parent) {
      return reviews.filter(review => review.courseId === parent.id)
    },
  },
}

module.exports = { courseQueries, courseChildrenQueries }
