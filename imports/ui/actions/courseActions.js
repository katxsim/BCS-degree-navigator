
const shortid = require("shortid");

export const addCourse = course => {
  console.log(course);
  return {
    type: "ADD_COURSE",
    course: {
      dept: course.dept,
      num: course.num,
      grade: course.grade,
      type: course.type,
      id: shortid.generate()
    }
  };
};

export const  deleteCourse = (course) => {
    return {
        type: "DELETE_COURSE",
        course: course
    }
}
