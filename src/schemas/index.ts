import * as yup from "yup";
const passwordRules = /^(?=.*[a-z])(?=.*\d?).{5,}$/;

export const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().matches(passwordRules, { message: 'Please enter a strong password' }).required("Password is required")
});
