export const  deleteCourse = (course) => {
    return {
        type: "DELETE_COURSE",
        course: course
    }
}
