import { Box, Paper } from "@mui/material"
import { Outlet } from "react-router-dom"
import SideBarMenu from "./components/sidebar/left-sidebar.component"

const Admin = () => {
  return <Paper sx={{
    pt: 10,
    minHeight: '100vh',
    display: 'flex',
    minWidth: '100vw'
  }}>
    <SideBarMenu />
    <Box flex={1}>
      <Outlet />
    </Box>
  </Paper>
}

export default Admin