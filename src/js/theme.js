import refs from '../references/refs';
const { bodyTheme, checkboxBtn } = refs;

checkboxBtn.addEventListener('change', e => {
  const checked = e.target.checked;
  if (checked) {
    bodyTheme.classList.add('dark-theme');
    bodyTheme.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyTheme.classList.add('light-theme');
    bodyTheme.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

let theme = localStorage.getItem('theme');

if (theme === 'dark') {
  bodyTheme.classList.add('dark-theme');
  checkboxBtn.checked = true;
}
