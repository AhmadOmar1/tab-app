import Admin from './pages/admin/admin.page';
import Checkout from './pages/checkout/checkout.page';
import Confirmation from './pages/confirmation/confirmation.page';
import Home from './pages/home/home.page';
import Hotel from './pages/hotel/hotel.page';
import Search from './pages/search/search.page';
import Login from './pages/login/login.page';
import NotFound from './pages/not-found/not-found.page';

interface Route {
  path: string;
  element: React.ReactElement;
  requireAuth: boolean;
  requireAdmin: boolean;
}

const routes: Route[] = [
  {
    path: '/login',
    element: <Login />,
    requireAuth: false,
    requireAdmin: false,
  },
  {
    path: '/admin',
    element: <Admin />,
    requireAuth: true,
    requireAdmin: true,
  },
  {
    path: '/checkout',
    element: <Checkout />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '/home',
    element: <Home />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '/',
    element: <Home />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '/hotel',
    element: <Hotel />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '/search',
    element: <Search />,
    requireAuth: true,
    requireAdmin: false,
  },
  {
    path: '*',
    element: <NotFound />,
    requireAuth: false,
    requireAdmin: false,
  },
];

export default routes;
