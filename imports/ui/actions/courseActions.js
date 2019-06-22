export const addCourse = course => {
  console.log(course);
  return {
    type: "ADD_COURSE",
    course: {
      dept: course.dept,
      code: course.code,
      grade: course.grade,
      group: course.group
    }
  };
};

export const deleteCourse = id => {
  return {
    type: "DELETE_COURSE",
    id: id
  };
};
