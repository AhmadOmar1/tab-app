import HotelCard from "../../../components/cards/hotel/hotel-card.component";
import CustomCarousel from "../../../components/common/carousel/custom-carousel.component";
import { useGetFeatureDealsQuery } from "../../../redux/user/hotel/hotels-api";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/common/loading/loading.component";

const FeatureDeals = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetFeatureDealsQuery();

  if (isLoading) {
    return <Loading />;
  }

  const handleCardClick = (hotelId: number) => {
    if (hotelId !== null) {
      const nextUrl = `/hotel?hotelId=${hotelId}`;
      navigate(nextUrl);
    }
  };

  return (
    <CustomCarousel
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
          onCardClick={() => handleCardClick(item.hotelId as number)}
          amenities={[]}
          title={""}
          hotelStarRating={item.hotelStarRating}
        />
      )}
    />
  );
};

export default FeatureDeals;
