import Box from "@mui/material/Box";
import HotelsGrid from "../hotel/components/hotels-grid.component";
import { SearchField } from "../../components/search-field/search-field.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetHotelBySearchMutation } from "../../redux/hotel/hotelsApi";
import dayjs from "dayjs";
import Loading from "../../components/common/loading/loading.component";
import { Hotel } from "../../models/hotel";
import { useEffect, useState } from "react";
import { Drawer, IconButton, } from "@mui/material";
import SideBar from "../../components/side-bar/sidebar.component";
import { ChevronLeft, FilterAlt } from "@mui/icons-material";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Search() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Hotel[]>();
  const { search } = useLocation()
  let [searchParams, setSearchParams] = useSearchParams();


  const location = searchParams.get("location") ?? '';
  const checkin = dayjs(searchParams.get("checkin"));
  const checkout = dayjs(searchParams.get("checkout")).add(1, 'day');
  const adults = Number(searchParams.get("adults") ?? 2);
  const children = Number(searchParams.get("children") ?? 0);
  const rooms = Number(searchParams.get("rooms") ?? 1);
  const [fetchSearchResults, { isLoading }] = useGetHotelBySearchMutation();

  const searchQuery =
    `checkInDate=${checkin.format('YYYY-MM-DD')}&checkOutDate=${checkout.format('YYYY-MM-DD')}&location=${location}
    &adults=${adults}&children=${children}&rooms=${rooms}`;

  console.log("searchQuery", searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSearchResults(searchQuery);
        if ('data' in response) {
          setSearchResults(response.data);
          console.log("response.data", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

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
    backgroundColor: " rgba(0, 0, 0, .5)",
    ...(mobileOpen && {
      left: drawerWidth - 35,
      top: "105px",
      backgroundColor: "none",
    }),
    transition: "left 0.3s ease-out",
  }

  return (
    <Box sx={{ display: "flex" }}>
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
          display: mobileOpen ? 'block' : 'none',
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
          <SideBar />
        </Drawer>
      </Box>
      <Box
        sx={{
          pt: 4,
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            pt: 6,
          }}
        >
          <SearchField
            adults={adults}
            children={children}
            rooms={rooms}
            location={location}
            checkin={checkin}
            checkout={checkout}
          />
          <HotelsGrid data={searchResults ?? []} />
        </Box>
      </Box>
      {isLoading && <Loading />}
    </Box>
  );
}