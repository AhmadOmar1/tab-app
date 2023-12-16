import * as yup from "yup";
// make valdation for username length and password length


export const loginValidationSchema = yup.object().shape({
    username: yup.string().required("Username is required*"),
    password: yup.string().required("Password is required*")
});
