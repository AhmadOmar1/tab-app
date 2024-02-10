import RecentlyVisited from "../../../components/cards/hotel/recently-visted.component";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import dayjs from "dayjs";
import CustomCarousel from "../../../components/common/carousel/custom-carousel.component";
import { useGetRecentlyVistedHotelsQuery } from "../../../redux/user/hotel/hotels-api";
import { responsive } from "../home.constants";

const RecentlyVistedHotels = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const { data, isLoading } = useGetRecentlyVistedHotelsQuery({
    id: user?.user_id as number,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <CustomCarousel
      responsive={responsive}
      items={data || []}
      renderCarouselItem={(item, index) => (
        <RecentlyVisited
          key={index}
          cityName={item.cityName}
          hotelName={item.hotelName}
          starRating={item.starRating}
          thumbnailUrl={item.thumbnailUrl}
          visitDate={dayjs(item.visitDate).format("DD/MM/YYYY")}
        />
      )}
    />
  );
};

export default RecentlyVistedHotels;
