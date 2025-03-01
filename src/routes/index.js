import DefaultLayout from '../components/Layout/DefaultLayout';
import Home from '../pages/homePage/HomePage';
import Login from '../pages/loginPage/LoginPage';
import Register from '../pages/register/registerPage';

/// define publicRoutes
const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
