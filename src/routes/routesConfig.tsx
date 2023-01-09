import PeoplePage from '../pages/PeoplePage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import PersonPage from '../pages/PersonPage';
import FavoritePage from '../pages/FavoritePage';
const routesConfig = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/people',
    component: PeoplePage
  },
  {
    path: '/favorites',
    component: FavoritePage
  },
  {
    path: '/people/:id',
    component: PersonPage
  },
  {
    path: '*',
    component: NotFound
  },
];

export default routesConfig
