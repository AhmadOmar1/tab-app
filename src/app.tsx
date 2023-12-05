import Admin from "./pages/admin/admin.page"
import Checkout from "./pages/checkout/checkout.page"
import Confirmation from "./pages/confirmation/confirmation.page"
import Home from "./pages/home/home.page"
import Hotel from "./pages/hotel/hotel.page"
import Search from "./pages/search/search.page"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/protected-route.component"
import Login from "./pages/login/login.page"
import NotFound from "./pages/not-found/not-found.page"

const routes = [{
  path: '/login',
  element: <Login />,
  requireAuth: false,
  requireAdmin: false
},
{
  path: '/admin',
  element: <Admin />,
  requireAuth: true,
  requireAdmin: true

}, {
  path: '/checkout',
  element: <Checkout />,
  requireAuth: true,
  requireAdmin: false
}, {
  path: '/confirmation',
  element: <Confirmation />,
  requireAuth: true,
  requireAdmin: false
}, {
  path: '/home',
  element: <Home />,
  requireAuth: true,
  requireAdmin: false
}, {
  path: '/hotel',
  element: <Hotel />,
  requireAuth: true,
  requireAdmin: false

}, {
  path: '/search',
  element: <Search />,
  requireAuth: true,
  requireAdmin: false
}]

function App() {
  return (
    <>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} element={route.requireAuth ? (<ProtectedRoute onlyAdmins={route.requireAdmin} component={route.element} />) : route.element} path={route.path} />
          ))
        }
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
