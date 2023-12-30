import { Box, Container, Paper, Typography, useTheme } from "@mui/material"
import style from './home.module.css'
import FeatureDeals from "./components/featured-deals.component";
import RecentlyVistedHotels from "./components/recently-visted-hotels.component";
import TrendingDestination from "./components/trending.component";
import { SearchField } from "../../components/search-field/search-field.component";
import { useEffect } from "react";

const Home = () => {
  const theme = useTheme();

  useEffect(() => {
    document.title = 'Home - Travel and Accommodation Booking Platform'
  }, [])

  return <Paper
    elevation={0}
    sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 10,
      paddingInline: 2,
    }}>
  

    <Container maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: '100%',
    }}>
      <Box  marginTop={5} display='flex' justifyContent='center'>
        <SearchField />
      </Box>
      
      <Box sx={{
        display: 'flex',
        mt: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Typography variant="h3" component="div" color={theme.palette.primary.light} gutterBottom textAlign='center' className={style.homeTitle}>
          Travel and Accommodation Booking Platform
        </Typography>

        <Typography variant="h6"  component="div" gutterBottom textAlign='center' className={style.homeSecondTitle}>
          Whether you're planning your next getaway, searching for the perfect stay,
          or exploring new destinations,
          we are here to assist you in finding precisely
          the right room that suits your travel needs.
        </Typography>
      </Box>

      <Box sx={{ marginBlock: 10 }}>
        <Box>
          <Typography variant="h4" color={theme.palette.secondary.dark} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Feature {''}
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary.light} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Deals
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.light}  component="div" textAlign='start' gutterBottom className={style.secondHomeHeader}  >
            Find a great deal on a hotel for tonight or an upcoming trip.
          </Typography>
        </Box>
        <Box marginBlock={10} >
          <FeatureDeals />
        </Box>
      </Box>

      <Box sx={{ marginBlock: 10 }}>
        <Box>
          <Typography variant="h4" color={theme.palette.secondary.light} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Recently  {''}
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary.dark} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Visted Hotels
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.light}  component="div" textAlign='start' gutterBottom className={style.secondHomeHeader}  >
            Find a great deal on a hotel for tonight or an upcoming trip.
          </Typography>
        </Box>
        <Box marginBlock={10} >
          <RecentlyVistedHotels />

        </Box>
      </Box>

      <Box sx={{ marginBlock: 10 }}>
        <Box>
          <Typography variant="h4" color={theme.palette.secondary.dark} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Trending  {''}
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary.light} component="span" textAlign='start' gutterBottom className={style.homeHeader}  >
            Destinations
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.light} component="div" textAlign='start' gutterBottom className={style.secondHomeHeader}  >
            Find a great deal on a hotel for tonight or an upcoming trip.
          </Typography>
        </Box>
        <Box marginBlock={10} >
          <TrendingDestination />
        </Box>


      </Box>
    </Container>
  </Paper >
}

export default Home