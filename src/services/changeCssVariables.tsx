import theme_dark_side from '.././assets/img/theme-dark-side.png';
import theme_light_side from '.././assets/img/theme-light-side.jpg';
import theme_neutral_side from '.././assets/img/space.png';

export const changeCssVariables = (theme: string) => {
  const headerMainPage = document.querySelector('.header-main-page') as HTMLElement;
  const root = document.getElementById('root');
  const ItemsListOfNavigation = document.querySelectorAll('.link-item');
  const ItemsArrOfNavigation = Array.prototype.slice.call(ItemsListOfNavigation);

  switch (theme) {
    case 'light':
      headerMainPage.style.color = '#dfe2df';
      ItemsArrOfNavigation.forEach((value) => value.style.color = '#dfe2df');
      root!.style.backgroundImage = `url(${theme_light_side})`;

      break;

    case 'dark':
      headerMainPage.style.color = '#ca6c6f';
      ItemsArrOfNavigation.forEach((value) => value.style.color = '#ca6c6f');
      root!.style.backgroundImage = `url(${theme_dark_side})`;

      break;

    case 'neutral':
      headerMainPage.style.color = '#ffef00';
      ItemsArrOfNavigation.forEach((value) => value.style.color = '#ffef00');
      root!.style.backgroundImage = `url(${theme_neutral_side})`;

      break;

    default:
      headerMainPage.style.color = '#ffef00';
      ItemsArrOfNavigation.forEach((value) => value.style.color = '#ffef00');
      root!.style.backgroundImage = `url(${theme_neutral_side})`;
      break;
  }


}
