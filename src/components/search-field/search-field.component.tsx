import { Search } from "@mui/icons-material";
import { Box, TextField, Button, FormControl, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {  useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledBox, StyledForm } from "./search-field.styles";
import { QuantityInput } from "../common/quantity-Input/quantityInput.component";
import style from "./search-field.module.css";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormValues } from "../../redux/user/hotel/hotels-slice";


type SearchFieldProps = {
  location?: string;
  checkin?: dayjs.Dayjs;
  checkout?: dayjs.Dayjs;
  adults?: number;
  children?: number;
  rooms?: number;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  location = '',
  checkin = dayjs(),
  checkout = dayjs().add(1, 'day'),
  adults = 2,
  children = 0,
  rooms = 1,
}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const onFocus = () => setExpanded(true);
  const onBlur = () => setExpanded(false);
  
  const dispatch = useDispatch();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      location,
      checkin,
      checkout,
      adults,
      children,
      rooms,
    },
    onSubmit:  (values) => {
      try {        
        dispatch(updateFormValues(values));
        const queryParams = {
          location: values.location,
          checkin: dayjs(values.checkin).format('YYYY-MM-DD'),
          checkout: dayjs(values.checkout).format('YYYY-MM-DD'),
          adults: values.adults,
          children: values.children,
          rooms: values.rooms,
        }
        navigate('/search?' + new URLSearchParams(queryParams as any).toString());
      }catch (err) {
          console.log(err);
      }
    }
  });

  return (
    <>
      <Box
        sx={{
          position: expanded ? "absolute" : "",
          inset: 0,
          zIndex: 3,
        }}
        onClick={onBlur}
      ></Box>
      <StyledBox expanded={expanded}>
        <StyledForm expanded={expanded} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            type="text"
            name="location"
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            value={formik.values.location}
            onChange={formik.handleChange}
            placeholder={expanded ? "Search for cities, hotels ..." : "Where"}
            onFocus={onFocus}
            sx={{
              "& fieldset": { border: expanded ? "solid 1px" : "none" },
              width: expanded ? "100%" : "30%",
            }}
          />
          <>
            <Box
              sx={{
                display: expanded ? "flex" : "none",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
                <FormControl
                  fullWidth
                  sx={{ minWidth: "150px" }}
                  onChange={formik.handleChange}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Check in"
                      name="checkin"
                      value={formik.values.checkin}
                      minDate={dayjs()}
                      sx={{
                        "& fieldset": { border: "solid 1px" },
                      }}
                      onChange={(date) => formik.setFieldValue("checkin", dayjs(date))}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormControl
                  fullWidth
                  sx={{ minWidth: "150px" }}
                  onChange={formik.handleChange}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Check Out"
                      name="checkout"
                      value={formik.values.checkout}
                      minDate={dayjs(formik.values.checkin).add(1, 'day')}
                      sx={{
                        "& fieldset": { border: "solid 1px" },
                      }}
                      onChange={(date) => formik.setFieldValue("checkout", dayjs(date))}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Box>

              <Box className={style.counters}>
                <QuantityInput
                  label="Adults"
                  minValue={1}
                  quantity={formik.values.adults}
                  setQuantity={(quantity) =>
                    formik.setFieldValue("adults", quantity)
                  }
                />
                <QuantityInput
                  label="Children"
                  minValue={0}
                  quantity={formik.values.children}
                  setQuantity={(quantity) =>
                    formik.setFieldValue("children", quantity)
                  }
                />
                <QuantityInput
                  label="Rooms"
                  minValue={1}
                  quantity={formik.values.rooms}
                  setQuantity={(quantity) =>
                    formik.setFieldValue("rooms", quantity)
                  }
                />
              </Box>
            </Box>
          </>
          {!expanded && (
            <>
              <TextField
                placeholder="When"
                value={`${dayjs(formik.values.checkin).format("MMM DD")} - ${dayjs(
                  formik.values.checkout
                ).format("MMM DD")}`}
                onFocus={onFocus}
                variant="outlined"
                name="when"
                type="text"
                sx={{
                  "& fieldset": { border: expanded ? "" : "none" },
                  width: "30%",
                }}
              />
              <TextField
                placeholder="Guests"
                variant="outlined"
                value={`${formik.values.adults + formik.values.children + formik.values.rooms} Guests`}
                type="text"
                onFocus={onFocus}
                sx={{
                  "& fieldset": { border: expanded ? "" : "none" },
                  width: "30%",
                }}
                onBlur={onBlur}
              />
            </>
          )}

          <Button
            type="submit"
            variant="contained"
            sx={{
              height: expanded ? "50px" : "40px",
              borderRadius: !expanded ? "50%" : "7px",
              minWidth: "auto",
              width: expanded ? "80%" : "40px",
              padding: expanded ? "15px" : "0",
              mt: expanded ? "20px" : "0",
              backgroundColor: theme.palette.secondary.dark,
            }}
          >
            <Search />
            {expanded && "Search"}
          </Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};
