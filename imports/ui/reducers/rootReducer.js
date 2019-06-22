const shortid = require("shortid");
const initState = {
    users: [
        { email: "test1@gmail.com", name: "test1" },
        { email: "test2@gmail.com", name: "test2" },
        { email: "test3@gmail.com", name: "test3" }
    ],

    // courses: [
    //   {
    //     group: "core",
    //     dept: "CPSC",
    //     code: 110,
    //     grade: 89,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "core",
    //     dept: "CPSC",
    //     code: 210,
    //     grade: 76,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "core",
    //     dept: "MATH",
    //     code: 200,
    //     grade: 91,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "bridging",
    //     dept: "STAT",
    //     code: 302,
    //     grade: 82,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "bridging",
    //     dept: "STAT",
    //     code: 305,
    //     grade: 87,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "bridging",
    //     dept: "STAT",
    //     code: 306,
    //     grade: 67,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "exemptions",
    //     dept: "ENGL",
    //     code: 110,
    //     grade: 90,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "exemptions",
    //     dept: "STAT",
    //     code: 200,
    //     grade: 84,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "exemptions",
    //     dept: "MATH",
    //     code: 108,
    //     grade: 88,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "replacements",
    //     dept: "MATH",
    //     code: 221,
    //     grade: 81,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "replacements",
    //     dept: "MATH",
    //     code: 200,
    //     grade: 75,
    //     id: shortid.generate()
    //   },
    //   {
    //     group: "replacements",
    //     dept: "DSCI",
    //     code: 100,
    //     grade: 72,
    //     id: shortid.generate()
    //   }
    // ]

    courses: {
        core: [
            {
                type: "core",
                dept: "CPSC",
                num: 110,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "core",
                dept: "CPSC",
                num: 210,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "core",
                dept: "MATH",
                num: 200,
                grade: 89,
                id: shortid.generate()
            }
        ],
        bridging: [
            {
                type: "bridging",
                dept: "STAT",
                num: 302,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "bridging",
                dept: "STAT",
                num: 305,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "bridging",
                dept: "STAT",
                num: 306,
                grade: 89,
                id: shortid.generate()
            }
        ],
        exemptions: [
            {
                type: "exemptions",
                dept: "ENGL",
                num: 110,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "exemptions",
                dept: "STAT",
                num: 200,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "exemptions",
                dept: "MATH",
                num: 108,
                grade: 89,
                id: shortid.generate()
            }
        ],
        replacements: [
            {
                type: "replacements",
                dept: "MATH",
                num: 221,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "replacements",
                dept: "MATH",
                num: 200,
                grade: 89,
                id: shortid.generate()
            },
            {
                type: "replacements",
                dept: "DSCI",
                num: 100,
                grade: 89,
                id: shortid.generate()
            }
        ]
    }
};

const rootReducer = (state = initState, action) => {
    console.log(action.course)
    if (action.type === "ADD_COURSE") {
        console.log(action.course)
        let newCourses = [];
        if (action.course.type === "core") {
            newCourses = [...state.courses.core, action.course];
        } else if (action.course.type === "bridging") {
            newCourses = [...state.courses.bridging, action.course];
        } else if (action.course.type === "exemptions") {
            newCourses = [...state.courses.exemptions, action.course];
        } else {
            newCourses = [...state.courses.replacements, action.course];
        }
        return {
            ...state,
            "courses": newCourses
        };
    }
    if (action.type === "DELETE_COURSE") {
        let core = state.courses.core.filter(currCourse => {
            // console.log(currCourse.id);
            // console.log(action.course.id);
            return currCourse.id !== action.course.id;
        });
        let bridging = state.courses.bridging.filter(currCourse => {
            // console.log(currCourse.id);
            // console.log(action.course.id);
            return currCourse.id !== action.course.id;
        });
        let exemptions = state.courses.exemptions.filter(currCourse => {
            // console.log(currCourse.id);
            // console.log(action.course.id);
            return currCourse.id !== action.course.id;
        });
        let replacements = state.courses.replacements.filter(currCourse => {
            // console.log(currCourse.id);
            // console.log(action.course.id);
            return currCourse.id !== action.course.id;
        });
        console.log("you deleted " + action.course.dept + " " + action.course.num);
        return {
            ...state,
            courses: { core, bridging, exemptions, replacements }
        };
    }
    return state;
};

export default rootReducer;
