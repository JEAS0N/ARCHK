const pop = document.querySelector(`.popover__content`)
const icon_pop = document.querySelector(`.popover`)
icon_pop.addEventListener('click', () => {
  pop.classList.toggle(`popover__content_show`)
})

const filterTime = document.querySelector(`.filter-items__times`)
const filterRec = document.querySelector(`.filter-items__rec`)

const timeSelector = document.querySelector(`.time-selectors`)
const recSelector = document.querySelector(`.rec-selectors`)

filterRec.addEventListener('click', () => {
  recSelector.classList.toggle(`rec-selectors__show`)
}
)

filterTime.addEventListener('click', () => {
  timeSelector.classList.toggle(`time-selectors__show`)
}
)

