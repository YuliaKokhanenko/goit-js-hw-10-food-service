import menuTemplate from './menu-template';
import menu from './menu.json';

document.addEventListener('DOMContentLoaded', () => {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyElement = document.body;
  const themeSwitchToggleElement = document.querySelector('#theme-switch-toggle');

  const switchTheme = isDarkTheme => {
    if (isDarkTheme) {
      bodyElement.classList.add(Theme.DARK);
      bodyElement.classList.remove(Theme.LIGHT);
    } else {
      bodyElement.classList.add(Theme.LIGHT);
      bodyElement.classList.remove(Theme.DARK);
    }

    localStorage.setItem('theme', isDarkTheme ? Theme.DARK : Theme.LIGHT);
  };

  themeSwitchToggleElement.addEventListener('change', () => {
    const isDarkTheme = themeSwitchToggleElement.checked;
    switchTheme(isDarkTheme);
  });

  const isDarkTheme = localStorage.getItem('theme') === Theme.DARK;
  switchTheme(isDarkTheme);
  themeSwitchToggleElement.checked = isDarkTheme;

  const compiledMenu = menu.map(menuTemplate).join('');
  const menuElement = document.querySelector('ul.js-menu');
  menuElement.innerHTML = compiledMenu;
});
