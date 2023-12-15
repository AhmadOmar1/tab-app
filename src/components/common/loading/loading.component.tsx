import { Box, CircularProgress, Typography } from "@mui/material"
const Loading = () => {
    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,50%)' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }} variant="body1">Loading...</Typography>
    </Box>
}

export default Loading