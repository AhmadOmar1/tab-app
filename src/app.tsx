
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Login from "./pages/login/login.page"
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "./theme/theme"
import { Paper } from "@mui/material"
import NavBar from "./components/navbar/navbar.component"
import { RootState } from '../src/redux/store';
import routes from "./routes"
import PrivateRoute from "./components/private-route.component";

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Paper
        style={{
          minHeight: "100vh",
          borderRadius: "0",
        }}
      >
        {<NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<PrivateRoute {...route} element={route.element} />}
              path={route.path}
            />
          ))}
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;