const SET_LOGIN_DATA = 'SET-LOGIN-DATA';

const initialState = {
    usernameValue: '',
    usernameValid: false,
    passwordValue: '',
    passwordValid: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.payload,
                usernameValid: true,
                passwordValid: true,
            };
        default:
            return state
    }
};

export default authReducer;