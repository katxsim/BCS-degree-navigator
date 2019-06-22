import authReducer from './authReducer'
import courseListReducer from './courseListReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    course: courseListReducer
});

export default rootReducer