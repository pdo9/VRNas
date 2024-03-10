'use strict'

/* -------------------------------- */
/* Концентрические круги для секции testimonial */
let DEFAULT_DIAMETER_MAX = 1247
let DEFAULT_DIAMETER_MIN = 391

let diameterMax = document.querySelector('.section-testimonial__inner')?.offsetWidth
diameterMax = diameterMax < DEFAULT_DIAMETER_MAX ? DEFAULT_DIAMETER_MAX : diameterMax

const circleItemsTestimonial = document.querySelectorAll('.list-circle__item')
let circleCount = circleItemsTestimonial.length

let diameterDelta = (diameterMax - DEFAULT_DIAMETER_MIN) / (circleCount - 1)

const drawCircles = (circleItems) => {
  if (circleItems) {
    for (let i = 0; i < circleCount; i++) {
      circleItems[i].style.width = DEFAULT_DIAMETER_MAX - diameterDelta * i + 'px'
      circleItems[i].style.height = circleItems[i].style.width
    }
  }
}

drawCircles(circleItemsTestimonial)
/* -------------------------------- */

/* -------------------------------- */
/* Концентрические круги для секции partners */
DEFAULT_DIAMETER_MAX = 1054
DEFAULT_DIAMETER_MIN = 453

diameterMax = document.querySelector('.section-partners__inner')?.offsetWidth
diameterMax = diameterMax < DEFAULT_DIAMETER_MAX ? DEFAULT_DIAMETER_MAX : diameterMax

const circleItemsPartners = document.querySelectorAll('.list-half-circle__item')
circleCount = circleItemsPartners.length

diameterDelta = (diameterMax - DEFAULT_DIAMETER_MIN) / (circleCount - 1)

drawCircles(circleItemsPartners)
/* -------------------------------- */

/* -------------------------------- */
/* "Аккордеон" для секции choose-us */

const ACCORDION_CONTAINER_CLASS = 'section-choose-us__list'
const ACCORDION_HEADER_CLASS = 'section-choose-us__item-caption'
const ACCORDION_HIDDEN_CLASS = 'section-choose-us__item-description'
const ACCORDION_TOGGLE_CLASS = 'accordion-hide'

let accordion = document.querySelector('.' + ACCORDION_CONTAINER_CLASS)
let accordionHeaderList = document.querySelectorAll('.' + ACCORDION_HEADER_CLASS)

const toggleAccordionContent = (element) => {
  if (!element.classList.contains(ACCORDION_HIDDEN_CLASS)) return

  element.classList.toggle(ACCORDION_TOGGLE_CLASS)
}

const toggleArrowIcon = (element) => {
  let arrowDownClass = 'icon-arrow-down'
  let arrowUpClass = 'icon-arrow-up'
  if (!element.classList.contains(ACCORDION_HEADER_CLASS)) return

  if (element.classList.contains(arrowDownClass)) {
    element.classList.remove(arrowDownClass)
    element.classList.add(arrowUpClass)
    return
  }

  if (element.classList.contains(arrowUpClass)) {
    element.classList.remove(arrowUpClass)
    element.classList.add(arrowDownClass)
    return
  }
}

const handleAccordionClick = (event) => {
  let clickedElement = event.target

  if (clickedElement.classList.contains(ACCORDION_HEADER_CLASS)) {
    toggleArrowIcon(clickedElement)
    toggleAccordionContent(clickedElement.nextElementSibling)

    const filteredAccordionHeaderList = Array.from(accordionHeaderList).filter((item) => {
      return item !== clickedElement
    })

    filteredAccordionHeaderList.forEach((element) => {
      element.nextElementSibling.classList.add(ACCORDION_TOGGLE_CLASS)
    })
  }
}

const animateAccordion = (accordion) =>
  accordion?.addEventListener('click', (event) => {
    handleAccordionClick(event)
  })

animateAccordion(accordion)
/* -------------------------------- */
