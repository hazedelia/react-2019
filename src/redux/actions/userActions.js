import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../../constants/index.js";



// Actions

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
        isRegistered: true,
    };
};


const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        isLogged: true,
    };
};


const registerError = () => {

    return {
        type: REGISTER_ERROR,
        isRegistered: false,
    };
};


const loginError = () => {

    return {
        type: LOGIN_ERROR,
        isLogged: false,
    };
};

const getUsersSuccess = (res) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: res.data.payload
    };
};


const getUsersError = () => {
    return {
        type: GET_USERS_ERROR
    }
}


// Action creators


export const register = (username, email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.REGISTER, {
            email,
            username,
            hashedPassword: CryptoJS.SHA256(password).toString(),
        })
            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()));
    };
};


export const login = (email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.LOGIN, {
            email,
            hashedPassword: CryptoJS.SHA256(password).toString(),
        })
            .then((res) => {
                const token = res.data.payload.token;

                localStorage.setItem("jwtToken", token);

                dispatch(loginSuccess());
            })


            .catch(() => dispatch(loginError()));
    };
};

export const getUsers = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_USERS)
            .then(res => dispatch(getUsersSuccess(res)))
            .catch(err => {
                console.error(err)
                dispatch(getUsersError());

            });
    };
};