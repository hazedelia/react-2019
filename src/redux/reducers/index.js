import { combineReducers } from "redux";
import { registerReducer } from "./userReducers";
import { loginReducer, getUsersReducer } from "./userReducers";
import { getPostsReducer } from "./postsReducer";

const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    getUsersReducer,
    getPostsReducer,
});

export default rootReducer;