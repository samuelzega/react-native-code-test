import * as yup from "yup";

export type LoginType = {
    email: string;
    password: string;
};

export const YupLogin = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email provided")
        .required("email is required"),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
});

export type LoginData = {
    isLogin: boolean;
    user: any;
};
