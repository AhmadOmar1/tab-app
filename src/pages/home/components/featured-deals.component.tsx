import HotelCard from "../../../components/cards/hotel/hotel-card.component";
import CustomCarousel from "../../../components/common/carousel/custom-carousel.component";
import { useEffect } from "react";
import { useGetFeatureDealsQuery } from "../../../redux/user/hotel/hotelsApi";
import Loading from "../../../components/common/loading/loading.component";
import { Hotel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const FeatureDeals = () => {
  const { data, isLoading, isError } = useGetFeatureDealsQuery()
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      console.log('Featured Deals:', data);
    }
    if (isError) {
      console.error('Error fetching featured deals:', isError);
    }
  }, [data, isError]);

  if (isLoading) {
    return <Loading />
  }

  const handleCardClick = (hotelId: number) => {
    if (hotelId !== null) {
      const nextUrl = `/hotel?hotelId=${hotelId}`;
      navigate(nextUrl);
    }
  }

  return <CustomCarousel
    items={data || []}
    renderCarouselItem={(item) => (
      <HotelCard
        key={item.hotelId}
        cityName={item.cityName}
        hotelName={item.hotelName}
        hotelId={item.hotelId}
        starRating={item.hotelStarRating}
        roomPhotoUrl={item.roomPhotoUrl}
        finalPrice={item.finalPrice}
        discount={item.discount}
        originalRoomPrice={item.originalRoomPrice}
        countryName={item.countryName}
        onCardClick={() => handleCardClick(item.hotelId as number )}
        amenities={[]}
        title={""}
        hotelStarRating={item.hotelStarRating}
      />
    )}
  />




};

export default FeatureDeals;
