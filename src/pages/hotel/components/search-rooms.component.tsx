import { Box, Button, FormControl, Paper, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCheckDates } from "../../../redux/user/hotel/hotels-slice";

type SearchRoomsProps = {
    onSubmit: (values:
        {
            checkin: dayjs.Dayjs,
            checkout: dayjs.Dayjs,
        }) => void;
}

const SearchRooms: React.FC<SearchRoomsProps> = ({
    onSubmit,
}) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            checkin: dayjs(),
            checkout: dayjs().add(1, 'day'),
        },
        onSubmit: (values) => {
            onSubmit(values);
        }
    });

    useEffect(() => {
        dispatch(updateCheckDates({
            checkin: formik.values.checkin.format('YYYY-MM-DD'),
            checkout: formik.values.checkout.format('YYYY-MM-DD'),
        }));
    }, [formik.values.checkin, formik.values.checkout, dispatch]);

    return (
        <Paper elevation={10} sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 2,
            gap: 2,
            width: '400px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }}>
            <Typography variant="h6" component="div">Search for available rooms</Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                }}>
                    <FormControl fullWidth sx={{ minWidth: "150px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Check in"
                                name="checkin"
                                value={formik.values.checkin}
                                minDate={dayjs(formik.values.checkin)}
                                onChange={(date) => {
                                    formik.setFieldValue("checkin", date);
                                }}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth sx={{ minWidth: "150px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Check Out"
                                name="checkout"
                                value={formik.values.checkout}
                                minDate={dayjs(formik.values.checkin).add(1, 'day')}
                                onChange={(date) => {
                                    formik.setFieldValue("checkout", date);
                                }}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
                <Button type="submit" sx={{ mt: 2 }} variant="contained" fullWidth>Search</Button>
            </form>

        </Paper>
    )
}

export default SearchRooms;
