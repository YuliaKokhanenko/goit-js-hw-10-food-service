import refs from '../references/refs';
const { bodyTheme, checkboxBtn } = refs;

checkboxBtn.addEventListener('change', e => {
  const checked = e.target.checked;
  if (checked) {
    bodyTheme.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    bodyTheme.classList.remove('dark-theme');
    localStorage.removeItem('theme');
  }
});

let theme = localStorage.getItem('theme');

if (theme === 'dark') {
  bodyTheme.classList.add('dark-theme');
  checkboxBtn.checked = true;
}
