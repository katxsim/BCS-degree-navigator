const shortid = require('shortid');
const initState = {
  "users": [
    // user 1
    {
      "email": "test1@gmail.com",
      "firstName": "test1",
      "lastName": "test1",
      "creditsEarned": 0,
      "bridgingCpscCounter": 0,
      "electiveCounter": [3,0], // counts num 300, 400 electives
      "exemptionLevels": [100, 200, 300], // update this when adding exemption and sort it
      "courses": [
        { "type": "core", "dept": "CPSC", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "CPSC", "num": 210, "id": shortid.generate() },
        // { "type": "core", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 302, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 305, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 306, "id": shortid.generate() },
        { "type": "exemptions", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "exemptions", "dept": "STAT", "num": 200, "id": shortid.generate() },
        { "type": "exemptions", "dept": "MATH", "num": 180, "id": shortid.generate() },
        { "type": "replacements", "dept": "MATH", "num": 221, "id": shortid.generate() },
        { "type": "replacements", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "replacements", "dept": "DSCI", "num": 100, "id": shortid.generate() }
      ] // end courses
    } // end user
  ] // end list of users
} // end initState

const rootReducer = (state = initState, action) => {
    // console.log(state)
    if (action.type === 'DELETE_COURSE') {

      let core = state.courses.core.filter(currCourse => {
        return currCourse.id !== action.course.id
      });
      let bridging = state.courses.bridging.filter(currCourse => {
        return currCourse.id !== action.course.id
      });
      let exemptions = state.courses.exemptions.filter(currCourse => {
        return currCourse.id !== action.course.id
      });
      let replacements = state.courses.replacements.filter(currCourse => {
        return currCourse.id !== action.course.id
      });
      console.log("you deleted " + action.course.dept + " " + action.course.num)
      return {
        ...state,
        "courses": { core, bridging, exemptions, replacements }
      }
    }
    if (action.type === 'ADD_USER') {
      console.log(action.user)
      let newUsers = [...state.users, action.user]
      console.log(newUsers)
      return {
        ...state,
        "users": newUsers
      }
    }
    return state;
  }

export default rootReducer