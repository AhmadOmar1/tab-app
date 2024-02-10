import React from "react";
import { useFormik } from "formik";
import { RatingCheckbox } from "../../../components/raiting/raiting-checkbox.componen";
import { FilterData } from "../../../models/filter";
import { RoomTypes } from "../../admin/rooms/components/addroom/room-details.component";
import { useGetAmentiesQuery } from "../../../redux/user/hotel/amenities-api";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import PriceIcon from "../../../assets/icons/price-icon.component";
import StarIcon from "../../../assets/icons/star-icon.component";
import AmenitiesIcon from "../../../assets/icons/amenities-icon.component";
import HomeIcon from "../../../assets/icons/home-icon.component";
import MultiSelect from "../../../components/common/select-menu/multi-select.component";
import SingleSelectCheckmarks from "../../../components/common/select-menu/select-menu.component";

const SideBar: React.FC<{ onFilter: (values: FilterData) => void }> = ({
  onFilter,
}) => {
  const { data } = useGetAmentiesQuery();

  const names = data?.map((item) => item.name) || [];

  const initialValues: FilterData = {
    price: [50, 1000],
    starRating: 0,
    amenities: [],
    roomType: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      onFilter(values);
    },
  });

  const handleClearForm = () => {
    formik.resetForm();
    onFilter(initialValues);
  };
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ pt: 10 }}>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Filter</Typography>
          </ListItem>
          <Divider />
          <List>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <PriceIcon />
                <ListItemText primary="Price" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  mt: 1,
                }}
              >
                <TextField
                  variant="filled"
                  value={`$ ${formik.values.price[0]} `}
                  sx={{ width: 90 }}
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Min"
                />
                <TextField
                  variant="filled"
                  value={`$ ${formik.values.price[1]} `}
                  sx={{ width: 90 }}
                  label="Max"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
              <Slider
                onChange={(event, value) =>
                  formik.setFieldValue("price", value)
                }
                size="small"
                value={formik.values.price}
                min={50}
                max={2000}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarIcon width="20" height="20" />
                <ListItemText primary="Rating" />
              </Box>
              <Box>
                <RatingCheckbox
                  value={formik.values.starRating}
                  setValue={(rating) =>
                    formik.setFieldValue("starRating", rating)
                  }
                />
              </Box>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <HomeIcon width="20" height="20" />
                <ListItemText primary="Room Type" />
              </Box>
              <SingleSelectCheckmarks
                choices={RoomTypes}
                value={formik.values.roomType}
                onChange={(value) => formik.setFieldValue("roomType", value)}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <AmenitiesIcon width="20" height="20" />
                <ListItemText primary="Amenities" />
              </Box>
              <MultiSelect
                options={names}
                value={formik.values.amenities}
                onChange={(value) => formik.setFieldValue("amenities", value)}
              />
            </ListItem>
          </List>
          <Divider />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              height: "40px",
              borderRadius: "7px",
              width: "100%",
              my: 2,
            }}
          >
            Filter
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleClearForm}
              variant="contained"
              color="error"
              sx={{
                height: "40px",
                borderRadius: "7px",
                width: "50%",
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default SideBar;
