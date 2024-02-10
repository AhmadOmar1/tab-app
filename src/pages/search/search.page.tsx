import React, { useEffect, useState, useCallback } from "react";
import { Box, Drawer, Fade } from "@mui/material";
import { useGetHotelBySearchMutation } from "../../redux/user/hotel/search-api";
import { ChevronLeft, FilterAlt } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { SearchField } from "../../components/search-field/search-field.component";
import { FilterData } from "../../models/filter";
import { Hotel } from "../../models/hotel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HotelsGrid from "../../components/cards/hotel/hotels-grid.component";
import SideBar from "./side-bar/sidebar.component";
import Loading from "../../components/common/loading/loading.component";
import dayjs from "dayjs";
import style from "./search.module.css";

const Search: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Hotel[]>([]);
  const [filteredResults, setFilteredResults] = useState<Hotel[]>([]);
  const [searchParams] = useSearchParams();

  const [filterData, setFilterData] = useState<FilterData>({
    price: [50, 1000],
    starRating: 0,
    amenities: [],
    roomType: "All rooms",
  });

  const location = searchParams.get("location") ?? "";
  const checkin = dayjs(searchParams.get("checkin"));
  const checkout = dayjs(searchParams.get("checkout")).add(1, "day");
  const adults = Number(searchParams.get("adults") ?? 2);
  const children = Number(searchParams.get("children") ?? 0);
  const rooms = Number(searchParams.get("rooms") ?? 1);

  const [fetchSearchResultsMutation, { isLoading }] = useGetHotelBySearchMutation();

  const searchQuery = React.useMemo(() => {
    return `checkInDate=${checkin.format("YYYY-MM-DD")}&checkOutDate=${checkout.format("YYYY-MM-DD")}&location=${location}&adults=${adults}&children=${children}&rooms=${rooms}&starRating=${filterData.starRating}`;
  }, [checkin, checkout, location, adults, children, rooms, filterData.starRating]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSearchResultsMutation(searchQuery).unwrap();
        setSearchResults(response);
        setFilteredResults(applyFilters(response));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery, fetchSearchResultsMutation]);

  useEffect(() => {
    setFilteredResults(applyFilters(searchResults));
  }, [filterData, searchResults]);

  const applyFilters = useCallback((dataToFilter: Hotel[]): Hotel[] => {
    return dataToFilter.filter((hotel) => {
      const starRatingMatches = hotel.starRating === filterData.starRating || filterData.starRating === 0;
      const priceMatches = hotel.roomPrice as number >= filterData.price[0] && hotel.roomPrice as number <= filterData.price[1];
      const roomTypeMatches = filterData.roomType === "All rooms" || filterData.roomType === "" || hotel.roomType === filterData.roomType;
      const amenitiesMatches = filterData.amenities.length === 0 || filterData.amenities.every((amenityName) => hotel.amenities.some((amenity) => amenity.name === amenityName));
      return starRatingMatches && priceMatches && roomTypeMatches && amenitiesMatches;
    });
  }, [filterData]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 350;
  const iconStyle = {
    position: "fixed",
    top: "90px",
    left: "50px",
    zIndex: 10000,
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, .5)",
    ...(mobileOpen && {
      left: drawerWidth - 35,
      top: "105px",
      backgroundColor: "none",
    }),
    transition: "left 0.3s ease-out",
  } as const;

  const handleFilter = (values: FilterData) => {
    setFilterData(values);
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          edge="start"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={iconStyle}
        >
          {mobileOpen ? <ChevronLeft /> : <FilterAlt />}
        </IconButton>
        <Box
          component="aside"
          sx={{
            width: { md: drawerWidth },
            flexShrink: { md: 0 },
            display: mobileOpen ? "block" : "none",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SideBar onFilter={handleFilter} />
          </Drawer>
        </Box>
        <Box
          sx={{
            pt: 4,
            px: 3,
          }}
        >
          <Box className={style.hotelsContainer}>
            <SearchField
              adults={adults}
              children={children}
              rooms={rooms}
              location={location}
              checkin={checkin}
              checkout={checkout}
            />
            {!isLoading && (
              <>
                {filteredResults.length === 0 && (
                  <Box className={style.noResults}>
                    <Typography variant="h5" textAlign="center">
                      No results found for your filter criteria.
                    </Typography>
                    <Typography variant="body1" textAlign="center">
                      Please try different filters or clear all filters to see more.
                    </Typography>
                  </Box>
                )}
                {filteredResults.length > 0 && <HotelsGrid data={filteredResults} />}
              </>
            )}
          </Box>
        </Box>
        {isLoading && <Loading />}
      </Box>
    </Fade>
  );
};

export default Search;
