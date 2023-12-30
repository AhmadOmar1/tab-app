
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
  firstName: yup.string().required("First Name is required*"),
  lastName: yup.string().required("Last Name is required*"),
  address: yup.string().required("Address is required*"),
});