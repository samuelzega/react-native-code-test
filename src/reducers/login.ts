import { LoginAction, LoginData } from "../constants";

export const loginReducer = (state: LoginData, action: LoginAction) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
                user: null,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                initializing: false,
            };
        default:
            return state;
    }
};
