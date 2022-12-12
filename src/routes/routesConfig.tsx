import PeoplePage from '../pages/PeoplePage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import PersonPage from '../pages/PersonPage';
const routesConfig = [
{
  path: '/',
  component:HomePage
},
{
  path: '/people',
  component:PeoplePage
},
{
  path: '/people/:id',
  component:PersonPage
},
{
  path: '*',
  component:NotFound
},
];

export default routesConfig
