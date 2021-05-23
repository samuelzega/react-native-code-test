export type LoginAction =
    | { type: "LOGIN"; payload: any }
    | { type: "LOGOUT" }
    | { type: "LOGIN_FAILED" };

export type Dispatch = (action: LoginAction) => void;
