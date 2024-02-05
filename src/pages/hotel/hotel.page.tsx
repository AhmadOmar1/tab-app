import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Paper,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  useGetHotelAvilableRoomsByIdQuery as useGetHotelAvailableRoomsByIdQuery,
  useGetHotelByIdQuery,
  useGetHotelGalleryByIdQuery,
  useGetHotelReviewsByIdQuery,
  useGetHotelRoomsByIdQuery,
} from "../../redux/user/hotel/hotelsApi";
import Loading from "../../components/common/loading/loading.component";
import { Hotel as HotelModel } from "../../models/hotel";
import { Review } from "../../models/review";
import { useEffect, useState } from "react";
import { ReservationData } from "../../models/search-reservation";
import { useDispatch } from "react-redux";
import { updateCheckDates } from "../../redux/user/hotel/hotels-slice";
import SomethingWentWrong from "../../components/common/error/something-went-wrong.component";
import AddReview from "../../components/cards/reviews/add-review.component";
import ReviewList from "../../components/cards/reviews/reviews-list.component";
import dayjs from "dayjs";
import style from "./hotel.module.css";
import AmenityList from "../../components/amenity/amenity-list.component";
import MapLocation from "../../components/map/map-container.component";
import MyGallery from "../../components/gallery/image-slider.component";
import LocationText from "../../components/common/text-icon/location.component";
import RoomList from "../../components/cards/room/room-list.component";
import SearchRooms from "./components/search-rooms.component";
const Hotel = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const hotelId = Number(searchParams.get("hotelId"));
  const [acitve, setActive] = useState("Reviews");
  const [activeRooms, setActiveRooms] = useState("allRooms");
  const [isError, setIsError] = useState(false);
  const [reservationData, setReservationData] = useState<ReservationData>({
    checkin: dayjs(),
    checkout: dayjs().add(1, "day"),
  });

  let images;
  let hotel: HotelModel | undefined;
  let avilableRooms;
  let allRooms;
  let reviews: Review[] = [];
  useEffect(() => {
    document.title = "Hotel";
  }, []);

  const checkInDate = reservationData.checkin.format("YYYY-MM-DD");
  const checkOutDate = reservationData.checkout.format("YYYY-MM-DD");
  try {
    const {
      data,
      error: hotelError,
      isLoading: isHotelLoading,
    } = useGetHotelByIdQuery({ id: hotelId, includeRooms: true });
    const {
      data: imageData,
      error: imagesError,
      isLoading: isImagesLoading,
    } = useGetHotelGalleryByIdQuery({ id: hotelId });
    const {
      data: reviewData,
      error: reviewError,
      isLoading: isReviewsLoading,
    } = useGetHotelReviewsByIdQuery({ id: hotelId });
    const {
      data: roomsData,
      error: avilableRoomError,
      isLoading: isAvailableRoomLoading,
    } = useGetHotelAvailableRoomsByIdQuery({
      id: hotelId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    });
    const {
      data: roomsResponse,
      error: allRoomsError,
      isLoading: isAllRoomsLoading,
    } = useGetHotelRoomsByIdQuery({
      id: hotelId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    });

    avilableRooms = roomsData || [];
    allRooms = roomsResponse || [];
    images = imageData || [];
    hotel = data || undefined;
    reviews = reviewData || [];

    if (
      hotelError ||
      imagesError ||
      reviewError ||
      avilableRoomError ||
      allRoomsError
    ) {
      setIsError(true);
    }
    if (
      isAllRoomsLoading ||
      isAvailableRoomLoading ||
      isHotelLoading ||
      isImagesLoading ||
      isReviewsLoading
    ) {
      return <Loading />;
    }
  } catch (e) {
    console.error("Error fetching hotel data:", e);
    setIsError(true);
  }

  const handleCheckDate = (values: ReservationData) => {
    setReservationData(values);
    console.log(
      values.checkin.format("YYYY-MM-DD"),
      values.checkout.format("YYYY-MM-DD")
    );
    dispatch(
      updateCheckDates({
        checkin: values.checkin.format("YYYY-MM-DD"),
        checkout: values.checkout.format("YYYY-MM-DD"),
      })
    );
  };

  if (isError) {
    return <SomethingWentWrong />;
  }

  return (
    <Paper
      sx={{
        pt: 5,
        minHeight: "100vh",
      }}
    >
      <Box className={style.hotelContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Box className={style.ImageHeader}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Box className={style.hotelHeader}>
                <Box className={style.hotelRating} sx={{ mb: 1 }}>
                  <Typography variant="h4" component="div">
                    {hotel?.hotelName}
                  </Typography>
                  <Rating name="read-only" value={hotel?.starRating} readOnly />
                </Box>
                <LocationText cityName={hotel?.location ?? ""} />
              </Box>
              <Box>
                <Typography variant="h5" component="div">
                  About {hotel?.hotelName}
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                  className={style.hotelDescription}
                  p={1}
                >
                  {hotel?.description}
                </Typography>
              </Box>
            </Box>

            <Box className={style.ImageConatiner}>
              <MyGallery images={images ?? []} />
            </Box>
          </Box>

          <Divider sx={{ width: "90%" }} />
          <Typography variant="h5" component="div">
            What this place offers
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <AmenityList amenities={hotel?.amenities || []} />
          </Box>
          <>
            <Typography variant="h5" component="span">
              Location{" "}
              <Typography variant="body1" component="span">
                {hotel?.location}
              </Typography>
            </Typography>
          </>
          <Box>
            <MapLocation
              lng={hotel?.longitude ?? 0}
              lat={hotel?.latitude ?? 0}
            />
          </Box>
          <Typography variant="h5" component="div">
            Hotel Rooms
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup
              variant="outlined"
              sx={{
                marginBlock: 5,
              }}
            >
              <Button
                onClick={() => setActiveRooms("allRooms")}
                sx={{
                  paddingBlock: 5,
                  width: 200,
                  backgroundColor:
                    activeRooms === "allRooms"
                      ? theme.palette.primary.main
                      : "",
                  color: activeRooms === "allRooms" ? "#000" : "",
                  "&:hover": {
                    backgroundColor:
                      activeRooms === "allRooms"
                        ? theme.palette.primary.main
                        : "",
                  },
                }}
              >
                {" "}
                All Rooms
              </Button>
              <Button
                onClick={() => setActiveRooms("availableRooms")}
                sx={{
                  paddingBlock: 4,
                  width: 200,
                  color: activeRooms === "availableRooms" ? "#000" : "",
                  backgroundColor:
                    activeRooms === "availableRooms"
                      ? theme.palette.primary.main
                      : "",
                  "&:hover": {
                    backgroundColor:
                      activeRooms === "availableRooms"
                        ? theme.palette.primary.main
                        : "",
                  },
                }}
              >
                Available Rooms
              </Button>
            </ButtonGroup>
          </Box>
          {activeRooms === "allRooms" && (
            <RoomList disabled={true} rooms={allRooms ?? []} />
          )}
          {activeRooms === "availableRooms" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchRooms onSubmit={handleCheckDate} />
              </Box>
              <RoomList rooms={avilableRooms ?? []} />
            </>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              minHeight: "100vh",
            }}
          >
            <Typography variant="h5" component="div">
              Ratings & reviews
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonGroup
                variant="outlined"
                sx={{
                  marginBlock: 5,
                }}
              >
                <Button
                  onClick={() => setActive("Reviews")}
                  sx={{
                    paddingBlock: 5,
                    width: 200,
                    backgroundColor: acitve === "Reviews" ? "gold" : "",
                    color: acitve === "Reviews" ? "#000" : "",

                    "&:hover": {
                      backgroundColor: acitve === "Reviews" ? "gold" : "",
                    },
                  }}
                >
                  {" "}
                  Reviews
                </Button>
                <Button
                  onClick={() => setActive("Comment")}
                  sx={{
                    paddingBlock: 4,
                    width: 200,
                    color:
                      acitve === "Comment"
                        ? theme.palette.primary.contrastText
                        : "",
                    backgroundColor:
                      acitve === "Comment" ? theme.palette.text.primary : "",
                    "&:hover": {
                      backgroundColor:
                        acitve === "Comment" ? theme.palette.text.primary : "",
                    },
                  }}
                >
                  Add Review
                </Button>
              </ButtonGroup>
            </Box>
            {acitve === "Reviews" && <ReviewList reviews={reviews} />}
            {acitve === "Comment" && <AddReview />}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Hotel;
