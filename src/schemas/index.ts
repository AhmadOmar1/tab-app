import * as yup from "yup"

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required*"),
  password: yup.string().required("Password is required*"),
});

export const SearchValidationSchema = yup.object({
  location: yup.string(),
  checkin: yup.string(),

  checkout: yup.string(),

  adults: yup
    .number()
    .nullable()
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"),
  children: yup
    .number()
    .min(0, "Must be at least 0")
    .max(10, "Must be at most 10"),
  rooms: yup
    .number()
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"),
  starRate: yup
    .number()
    .min(1, "Must be at least 1")
    .max(5, "Must be at most 5"),
});

export type SearchValidationSchemaType = yup.InferType<
  typeof SearchValidationSchema
>;



export const PersonalDetailsSchema = yup.object().shape({
  firstName: yup.string()
    .required("First Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "First Name must be at least 2 characters"),
  lastName: yup.string()
    .required("Last Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Last Name must be at least 2 characters"),
  address: yup.string()
  .required("Address is required*")
  .min(5, "Address must be at least 5 characters"),
});


export const PaymentlDetailsSchema = yup.object().shape({
  cardNumber: yup.string()
    .required("Card Number is required*")
    .matches(/^[0-9]+$/, "Only numbers are allowed for this field ")
    .min(16, "Card Number must be at least 16 characters"),
  cardHolderName: yup.string()
    .required("Card Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Card Name must be at least 2 characters"),
    expiration: yup.string()
    .required("Expiry Date is required*")
    .matches(/^[0-9]+$/, "Only numbers are allowed for this field ")
    .min(4, "Expiry Date must be at least 4 characters"),
  cvv: yup.string()
    .required("CVV is required*")
    .matches(/^[0-9]+$/, "Only numbers are allowed for this field ")
    .min(3, "CVV must be at least 3 characters"),
});