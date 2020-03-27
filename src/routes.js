import About from './pages/About';
import Faq from './pages/Faq';
import Guidelines from './pages/Guidelines';
import NotFound from './pages/NotFound';
import Stories from './pages/Stories';

const routes = [
  {
    path: '/',
    exact: true,
    redirectTo: '/stories',
  },
  {
    path: '/stories',
    component: Stories,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/faq',
    component: Faq,
  },
  {
    path: '/guidelines',
    component: Guidelines,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
