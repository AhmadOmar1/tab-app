import RecentlyVisited from "../../../components/cards/hotel/recently-visted.component";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import dayjs from "dayjs";
import CustomCarousel from "../../../components/common/carousel/custom-carousel.component";
import { useGetRecentlyVistedHotelsQuery } from "../../../redux/user/hotel/hotelsApi";


const RecentlyVistedHotels = () => {

    const user = useSelector((state: RootState) => state.auth.user);
    console.log('user:', user);

    const { data, isLoading, isError } = useGetRecentlyVistedHotelsQuery({ id: user?.user_id ?? 0 });
    useEffect(() => {
        if (data) {
            console.log('Recently Visted Hotels:', data);
        }
        if (isError) {
            console.error('Error fetching recently visted hotels:', isError);
        }
        if (isLoading) {
            console.log('Loading recently visted hotels...');
        }
    }, [data])

    if (isLoading) return <div>Loading...</div>
    const responsive = {
        desktopXL: {
            breakpoint: { max: 3000, min: 1366 },
            items: 5,
            slidesToSlide: 5,
        },
        desktopL: {
            breakpoint: { max: 1890, min: 1366 },
            items: 4,
            slidesToSlide: 4,
        },
        desktopM: {
            breakpoint: { max: 1550, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tabletL: {
            breakpoint: { max: 1190, min: 900 },
            items: 2,
            slidesToSlide: 2,
        },

        tabletS: {
            breakpoint: { max: 890, min: 600 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileL: {
            breakpoint: { max: 600, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileM: {
            breakpoint: { max: 464, min: 375 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileS: {
            breakpoint: { max: 375, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <CustomCarousel responsive={responsive} items={data || []}
            renderCarouselItem={(item, index) => (
                <RecentlyVisited
                    key={index}
                    cityName={item.cityName}
                    hotelName={item.hotelName}
                    starRating={item.starRating}
                    thumbnailUrl={item.thumbnailUrl}
                    visitDate={dayjs(item.visitDate).format('DD/MM/YYYY')}
                />
            )}
        />
    );
};

export default RecentlyVistedHotels;
