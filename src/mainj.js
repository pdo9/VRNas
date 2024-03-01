'strict mode'

/* -------------------------------- */
/* Концентрические круги для секции testimonial */
const DEFAULT_MAX_DIAMETER = 1247

let diameterMax = document.querySelector('.section-testimonial__inner').offsetWidth
const circleItems = document.querySelectorAll('.list-circle__item')

diameterMax = diameterMax < DEFAULT_MAX_DIAMETER ? DEFAULT_MAX_DIAMETER : diameterMax

const diameterDelta = (diameterMax - 391) / 6

const drawCircles = (circleItems) => {
  if (circleItems) {
    for (let i = 0; i < circleItems.length; i++) {
      circleItems[i].style.width = 1247 - diameterDelta * i + 'px'
      circleItems[i].style.height = circleItems[i].style.width
    }
  }
}

drawCircles(circleItems)
/* -------------------------------- */
