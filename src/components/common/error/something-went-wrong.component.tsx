import { Paper, Typography } from "@mui/material";

const SomethingWentWrong = () => {
  return (
    <Paper
      sx={{
        pt: 5,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" color="error" textAlign="center">
        Something went wrong. Please try again later.
      </Typography>
    </Paper>
  );
};

export default SomethingWentWrong;
