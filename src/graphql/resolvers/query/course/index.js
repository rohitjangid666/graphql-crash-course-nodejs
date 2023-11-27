const courses = require('../../../../db/courses.json')

const courseQueries = {
  getCourses() {
    return courses
  },
  getCourse(_, args) {
    return courses.find(course => course.id === args.id)
  },
}

module.exports = courseQueries
