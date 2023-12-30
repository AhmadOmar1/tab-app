import { Box, Button, ButtonGroup, Divider, FormControl, Paper, Rating, TextField, Typography, useTheme } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { useGetHotelAvilableRoomsByIdQuery, useGetHotelByIdQuery, useGetHotelGalleryByIdQuery, useGetHotelReviewsByIdQuery, useGetHotelRoomsByIdQuery } from "../../redux/hotel/hotelsApi";
import Loading from "../../components/common/loading/loading.component";
import { Hotel as HotelModel } from "../../models/hotel";
import style from './hotel.module.css';
import AmenityList from "../../components/amenity/amenity-list.component";
import MapLocation from "../../components/map/map-container.component";
import MyGallery from "../../components/gallery/image-slider.component";
import LocationText from "../../components/common/text-icon/location.component";
import RoomList from "../../components/cards/room/room-list.component";
import { Review } from "../../models/review"
import ReviewList from "../../components/cards/reviews/reviews-list.component";
import { useState } from "react";
import AddReview from "../../components/cards/reviews/add-review.component";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Hotel = () => {
  let [searchParams,] = useSearchParams();
  const [acitve, setActive] = useState('Reviews')
  const [activeRooms, setActiveRooms] = useState('allRooms');
  const theme = useTheme();
  const hotelId = Number(searchParams.get("hotelId"));
  console.log("hotelId", hotelId);



  let images;
  let hotel: HotelModel | undefined, error;
  let avilableRooms;
  let allRooms;
  let reviews: Review[] = [];



  const formik = useFormik({
    initialValues: {
      checkin: dayjs(),
      checkout: dayjs().add(1, 'day'),
    },
    onSubmit: (values) => {
      try {
        const queryParams = {
          checkin: dayjs(values.checkin).format('YYYY-MM-DD'),
          checkout: dayjs(values.checkout).format('YYYY-MM-DD'),
        }
        console.log("queryParams", queryParams);
      } catch (err) {
        console.log(err);
      }
    }
  });

  try {
    const { data, error: queryError, isLoading } = useGetHotelByIdQuery({ id: hotelId, includeRooms: true });
    const { data: imageData, error: imagesError, isLoading: imagesLoading } = useGetHotelGalleryByIdQuery({ id: hotelId });
    const { data: reviewData, error: reviewError, isLoading: reviewsLoading } = useGetHotelReviewsByIdQuery({ id: hotelId });

    const checkin = dayjs(formik.values.checkin).format('YYYY-MM-DD');
    const checkout = dayjs(formik.values.checkout).format('YYYY-MM-DD');

    const { data: roomsData, error: avilableRoomError, isLoading: avilableRoomLoading } = useGetHotelAvilableRoomsByIdQuery({ id: hotelId, checkInDate: checkin, checkOutDate: checkout });

    const { data: roomsResponse, error: allRoomsError, isLoading: allRoomLoading } = useGetHotelRoomsByIdQuery({ id: hotelId, checkInDate: checkin, checkOutDate: checkout });

    avilableRooms = roomsData || [];
    allRooms = roomsResponse || [];
    images = imageData || [];
    hotel = data || undefined;
    reviews = reviewData || [];
    error = queryError;
    if (isLoading) return <Loading />;
  } catch (e) {
    console.error("Error fetching hotel data:", e);
    error = e;
  }


  return <Paper sx={{
    pt: 5,
    minHeight: '100vh',
  }}>
    <Box className={style.hotelContainer}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }}>
        <Box className={style.ImageHeader}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,

          }}>
            <Box className={style.hotelHeader}>
              <Box className={style.hotelRating} sx={{ mb: 1 }}>
                <Typography variant="h4" component="div"  >
                  {hotel?.hotelName}
                </Typography>
                <Rating name="read-only" value={hotel?.starRating} readOnly />
              </Box>
              <LocationText cityName={hotel?.location ?? ""} />
            </Box>
            <Box>
              <Typography variant="h5" component="div">
                About{' '}   {hotel?.hotelName}
              </Typography>

              <Typography variant="h6" component="div" className={style.hotelDescription} p={1} >
                {hotel?.description}
              </Typography>
            </Box>
          </Box>

          <Box className={style.ImageConatiner}>
            <MyGallery images={images ?? []} />
          </Box>
        </Box>


        <Divider sx={{ width: '90%' }} />
        <Typography variant="h5" component="div">What this place offers</Typography>

        <Box sx={{
          display: 'flex',
          alignContent: 'center',
        }}>
          <AmenityList amenities={hotel?.amenities || []} />
        </Box>
        <>
          <Typography variant="h5" component="span">
            Location {' '}
            <Typography variant="body1" component="span">{hotel?.location}</Typography>
          </Typography>

        </>


        <Box>
          <MapLocation lng={hotel?.longitude ?? 0} lat={hotel?.latitude ?? 0} />
        </Box>

        <Typography variant="h5" component="div">Hotel Rooms</Typography>


        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          <ButtonGroup variant="outlined" sx={{
            marginBlock: 5
          }}>
            <Button
              onClick={() => setActiveRooms('allRooms')}
              sx={{
                paddingBlock: 5,
                width: 200,
                backgroundColor: activeRooms === 'allRooms' ?  theme.palette.primary.main : '',
                color: activeRooms === 'allRooms' ? '#000' : '',
                '&:hover': {
                  backgroundColor: activeRooms === 'allRooms' ?  theme.palette.primary.main : '',
                }
              }}> All Rooms</Button>
            <Button onClick={() => setActiveRooms('availableRooms')}
              sx={{
                paddingBlock: 4,
                width: 200,
                color: activeRooms === 'availableRooms' ? '#000' : '',
                backgroundColor: activeRooms === 'availableRooms' ? theme.palette.primary.main : '',
                '&:hover': {
                  backgroundColor: activeRooms === 'availableRooms' ? theme.palette.primary.main : '',
                }
              }}>Available Rooms</Button>
          </ButtonGroup>
        </Box>
        {activeRooms === 'allRooms' && <RoomList rooms={allRooms ?? []} />}
        {activeRooms === 'availableRooms' && <>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'center',

          }}>
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
              <form onSubmit={formik.handleSubmit} >
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                }}>
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
                        onChange={(date) => {
                          const checkinDate = dayjs(date);
                          formik.setFieldValue("checkin", checkinDate.format());
                        }}
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
                        onChange={(date) => {
                          const checkoutDate = dayjs(date);
                          formik.setFieldValue("checkout", checkoutDate.toISOString());
                        }}
                      />
                    </LocalizationProvider>
                  </FormControl>

                </Box>
              </form>

            </Paper>
          </Box>
          <RoomList rooms={avilableRooms ?? []} />
        </>
        }

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          minHeight: '100vh',

        }}>
          <Typography variant="h5" component="div">Ratings & reviews</Typography>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} >
            <ButtonGroup variant="outlined" sx={{
              marginBlock: 5
            }}>
              <Button onClick={() => setActive('Reviews')} sx={{
                paddingBlock: 5,
                width: 200,
                backgroundColor: acitve === 'Reviews' ? "gold" : '',
                color: acitve === 'Reviews' ? '#000' : '',

                '&:hover': {
                  backgroundColor: acitve === 'Reviews' ? "gold" : '',
                }
              }}> Reviews</Button>
              <Button onClick={() => setActive('Comment')}
                sx={{
                  paddingBlock: 4,
                  width: 200,
                  color: acitve === 'Comment' ? theme.palette.primary.contrastText : '',
                  backgroundColor: acitve === 'Comment' ? theme.palette.text.primary : '',
                  '&:hover': {
                    backgroundColor: acitve === 'Comment' ? theme.palette.text.primary : '',
                  }
                }}>Add Review</Button>
            </ButtonGroup>
          </Box>
          {acitve === 'Reviews' && <ReviewList reviews={reviews} />}
          {acitve === 'Comment' && <AddReview />}

        </Box>
      </Box>


    </Box>
  </Paper >
}


export default Hotel