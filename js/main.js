const pop = document.querySelector(`.popover__content`);
const icon_pop = document.querySelector(`.popover`);
icon_pop.addEventListener('click', () => {
  pop.classList.toggle(`popover__content_show`);
});