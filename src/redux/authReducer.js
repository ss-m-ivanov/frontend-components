import {authAPI} from "../api/api";

const SET_USER = "SET_USER";

let initialState = {
    email: null,
    password: null,
    isAuth: null
};

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthUserData = (email, password) =>
    ({type:SET_USER, payload:{email, password}});


export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password)
            .then(response => {
                console.log(response)
            })
    }
};