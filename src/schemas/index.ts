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


export const AddHotelSchema = yup.object().shape({
  name: yup.string()
    .required("Hotel Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Hotel Name must be at least 2 characters"),
  description: yup.string()
    .required("Description is required*")
    .min(5, "Description must be at least 5 characters"),
  starRating: yup.number()
    .required("Star Rating is required*")
    .min(1, "Star Rating must be at least 1 characters")
    .max(5, "Star Rating must be at most 5 characters"),
  latitude: yup.number()
    .min(-90, 'Latitude must be greater than or equal to -90')
    .max(90, 'Latitude must be less than or equal to 90')
    .required('Latitude is required'),
  longitude: yup.number()
    .min(-180, 'Longitude must be greater than or equal to -180')
    .max(180, 'Longitude must be less than or equal to 180')
    .required('Longitude is required'),
});




export const AddCitySchema = yup.object().shape({
  name: yup.string()
    .required("City Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "City Name must be at least 2 characters"),
  description: yup.string()
    .required("Description is required*")
    .min(5, "Description must be at least 5 characters"),
});



export const AddRoomDetailsSchema = yup.object().shape({
  roomNumber: yup.string()
    .required("Room Number is required*")
    .matches(/^[0-9]+$/, "Only numbers are allowed for this field ")
    .min(1, "Room Number must be at least 1 characters"),
  roomType: yup.string()
    .required("Room Type is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Room Type must be at least 2 characters"),
  price: yup.number()
    .required("Price is required*")
    .min(1, "Price must be at least 1 characters"),
  capacityOfAdults: yup.number()
    .required("Capacity Of Adults is required*")
    .min(1, "Capacity Of Adults must be at least 1 characters"),
  capacityOfChildren: yup.number()
    .required("Capacity Of Children is required*")
    .min(0, "Capacity Of Children must be at least 0 characters"),

  description: yup.string()
    .required("Description is required*")
    .min(5, "Description must be at least 5 characters"),
}); 


export const AddRoomPhotoSchema = yup.object().shape({
  roomPhotoUrl: yup.string()
    .required("Photo Url is required*")
    .min(2, "Photo Url must be at least 2 characters"),
});

export const AddRoomAmenitySchema = yup.object().shape({
  name: yup.string()
    .required("Amenity Name is required*")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(2, "Amenity Name must be at least 2 characters"),
  description: yup.string()
    .required("Description is required*")
    .min(5, "Description must be at least 5 characters"),
});

const AmenitySchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
});

export const RoomAmenitiesSchema = yup.array().of(AmenitySchema);