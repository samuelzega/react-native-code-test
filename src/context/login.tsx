import React, { useReducer } from "react";

import { LoginData, Dispatch } from "../constants";
import { loginReducer } from "../reducers";

const initialState: LoginData = {
    isLogin: false,
    user: null,
};

export const LoginContext =
    React.createContext<{ state: LoginData; dispatch: Dispatch }>(initialState);

type LoginProviderProps = {
    children: React.ReactNode;
};
export const LoginProvider = ({ children }: LoginProviderProps) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const value = { state, dispatch };

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );
};
