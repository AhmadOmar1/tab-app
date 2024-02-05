import {
  Box,
  Container,
  Fade,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import FeatureDeals from "./components/featured-deals.component";
import RecentlyVistedHotels from "./components/recently-visted-hotels.component";
import TrendingDestination from "./components/trending.component";
import { SearchField } from "../../components/search-field/search-field.component";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home - Travel and Accommodation Booking Platform";
    setIsLoaded(true);
  }, []);

  return (
    <Fade in={isLoaded} timeout={3000}>
      <Paper elevation={0} className={styles.homeContainer}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "100%",
          }}
        >
          <Box marginTop={5} display="flex" justifyContent="center">
            <SearchField />
          </Box>

          <Box
            sx={{
              display: "flex",
              mt: 10,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              color={theme.palette.primary.light}
              gutterBottom
              textAlign="center"
              className={styles.homeTitle}
            >
              Travel and Accommodation Booking Platform
            </Typography>

            <Typography
              variant="h6"
              component="div"
              gutterBottom
              textAlign="center"
              className={styles.homeSecondTitle}
            >
              Whether you're planning your next getaway, searching for the
              perfect stay, or exploring new destinations, we are here to assist
              you in finding precisely the right room that suits your travel
              needs.
            </Typography>
          </Box>

          <Box my={10}>
            <Box>
              <Typography
                variant="h4"
                color={theme.palette.secondary.dark}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Feature {""}
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.secondary.light}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Deals
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.secondary.light}
                component="div"
                textAlign="start"
                gutterBottom
                className={styles.secondHomeHeader}
              >
                Find a great deal on a hotel for tonight or an upcoming trip.
              </Typography>
            </Box>
            <Box>
              <FeatureDeals />
            </Box>
          </Box>

          <Box mb={10}>
            <Box>
              <Typography
                variant="h4"
                color={theme.palette.secondary.light}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Recently {""}
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.secondary.dark}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Visted Hotels
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.secondary.light}
                component="div"
                textAlign="start"
                gutterBottom
                className={styles.secondHomeHeader}
              >
                See your recently visited hotels.
              </Typography>
            </Box>
            <Box>
              <RecentlyVistedHotels />
            </Box>
          </Box>

          <Box mb={10}>
            <Box>
              <Typography
                variant="h4"
                color={theme.palette.secondary.dark}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Trending {""}
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.secondary.light}
                component="span"
                textAlign="start"
                gutterBottom
                className={styles.homeHeader}
              >
                Destinations
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.secondary.light}
                component="div"
                textAlign="start"
                gutterBottom
                className={styles.secondHomeHeader}
              >
                See where people are traveling, all around the world.
              </Typography>
            </Box>
            <Box my={10}>
              <TrendingDestination />
            </Box>
          </Box>
        </Container>
      </Paper>
    </Fade>
  );
};

export default Home;
