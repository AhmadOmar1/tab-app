import { Box, CircularProgress, Typography } from "@mui/material";

const loadingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,50%)",
  zIndex: 112222222
};

const Loading = () => {
  return (
    <Box
    sx={loadingStyle}
    >
      <CircularProgress />
      <Typography sx={{ mt: 2 }} variant="body1">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
