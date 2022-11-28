import PeoplePage from '../pages/PeoplePage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
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
  path: '*',
  component:NotFound
},
];

export default routesConfig
