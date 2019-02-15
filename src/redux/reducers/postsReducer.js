import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, SUBMIT_POST_ERROR, SUBMIT_POST_SUCCESS } from "../../constants";



const defaultState = {

    posts: null
}

export const getPostsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload.reverse() };
        case SUBMIT_POST_SUCCESS:
            return { ...state, posts: [action.payload, ...state.posts] }
        case GET_POSTS_ERROR:
        case SUBMIT_POST_ERROR:
        default:
            return state;
    }
};