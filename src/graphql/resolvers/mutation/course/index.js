const courses = require('../../../../db/courses.json')

const courseMutations = {
  addCourse(_, args) {
    let course = {
      ...args.input,
      id: Math.floor(Math.random() * 10000).toString(),
    }

    courses.push(course)

    return course
  },

  deleteCourse(_, args) {
    return courses.filter(course => course.id !== args.id)
  },

  updateCourse(_, args) {
    const courseIndex = courses.findIndex(course => course.id === args.id)
    const oldValues = { ...courses[courseIndex] }
    const newValues = { ...oldValues, ...args.input }
    courses[courseIndex] = newValues

    return newValues
  },
}

module.exports = { courseMutations }
