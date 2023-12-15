import Admin from "./pages/admin/admin.page"
import Checkout from "./pages/checkout/checkout.page"
import Confirmation from "./pages/confirmation/confirmation.page"
import Home from "./pages/home/home.page"
import Hotel from "./pages/hotel/hotel.page"
import Search from "./pages/search/search.page"
import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/protected-route.component"
import Login from "./pages/login/login.page"
import NotFound from "./pages/not-found/not-found.page"
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux"
import { darkTheme, lightTheme } from "./theme/theme"
import { Paper } from "@mui/material"
import NavBar from "./components/appbar/app-bar.component"
import { RootState } from '../src/redux/store';

const routes = [
  { path: '/login', element: <Login />, requireAuth: false, requireAdmin: false },
  { path: '/admin', element: <Admin />, requireAuth: true, requireAdmin: true },
  { path: '/checkout', element: <Checkout />, requireAuth: true, requireAdmin: false },
  { path: '/confirmation', element: <Confirmation />, requireAuth: true, requireAdmin: false },
  { path: '/home', element: <Home />, requireAuth: true, requireAdmin: false },
  { path: '/', element: <Home />, requireAuth: true, requireAdmin: false },
  { path: '/hotel', element: <Hotel />, requireAuth: true, requireAdmin: false },
  { path: '/search', element: <Search />, requireAuth: true, requireAdmin: false },
  { path: '*', element: <NotFound />, requireAuth: false, requireAdmin: false },
];

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  return (
    <ThemeProvider theme={theme.theme === 'dark' ? darkTheme : lightTheme}>
      <Paper
        style={{
          minHeight: "100vh",
          borderRadius: "0",
        }}
      >
        <NavBar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={
                route.requireAuth ? (
                  isLoggedIn ? (
                    route.requireAdmin ? (
                      <ProtectedRoute onlyAdmins={route.requireAdmin} component={route.element} />
                    ) : (
                      route.element
                    )
                  ) : (
                    <Navigate to="/login" />
                  )
                ) : (
                  route.element
                )
              }
              path={route.path}
            />
          ))}
        </Routes>

      </Paper>
    </ThemeProvider>
  );
}

export default App;