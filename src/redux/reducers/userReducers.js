import { REGISTER_SUCCESS, REGISTER_ERROR } from "../../constants";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../constants";
import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "../../constants";



const defaultState = {
    isRegistered: false,
    isLogged: false,
    users: null
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, isRegistered: true };
        case REGISTER_ERROR:
            return { ...state, isRegistered: false };
        default:
            return state;
    }
};





export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogged: true };
        case LOGIN_ERROR:
            return { ...state, isLogged: false };
        default:
            return state;
    }
};

export const getUsersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload };

        case GET_USERS_ERROR:
            return { ...state, users: null };
        default:
            return state;
    }
};