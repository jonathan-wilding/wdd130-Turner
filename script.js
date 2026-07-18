
const button = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
if (button && nav) {
  button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}
