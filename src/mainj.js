'strict mode'

/* -------------------------------- */
/* Концентрические круги для секции testimonial */
const DEFAULT_DIAMETER_MAX = 1247
const DEFAULT_DIAMETER_MIN = 391

let diameterMax = document.querySelector('.section-testimonial__inner').offsetWidth
diameterMax = diameterMax < DEFAULT_DIAMETER_MAX ? DEFAULT_DIAMETER_MAX : diameterMax

const circleItems = document.querySelectorAll('.list-circle__item')
let circleCount = circleItems.length

const diameterDelta = (diameterMax - DEFAULT_DIAMETER_MIN) / (circleCount - 1)

const drawCircles = (circleItems) => {
  if (circleItems) {
    for (let i = 0; i < circleCount; i++) {
      circleItems[i].style.width = 1247 - diameterDelta * i + 'px'
      circleItems[i].style.height = circleItems[i].style.width
    }
  }
}

drawCircles(circleItems)
/* -------------------------------- */
