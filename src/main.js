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
      circleItems[i].style.width = DEFAULT_DIAMETER_MAX - diameterDelta * i + 'px'
      circleItems[i].style.height = circleItems[i].style.width
    }
  }
}

drawCircles(circleItems)
/* -------------------------------- */

/* -------------------------------- */
/* Концентрические круги для секции partners */
const DEFAULT_DIAMETER_MAX2 = 1054
const DEFAULT_DIAMETER_MIN2 = 453

let diameterMax2 = document.querySelector('.section-partners__inner').offsetWidth
diameterMax2 = diameterMax2 < DEFAULT_DIAMETER_MAX2 ? DEFAULT_DIAMETER_MAX2 : diameterMax2

const circleItems2 = document.querySelectorAll('.list-half-circle__item')
let circleCount2 = circleItems2.length

const diameterDelta2 = (diameterMax2 - DEFAULT_DIAMETER_MIN2) / (circleCount2 - 1)

const drawCircles2 = (circleItems2) => {
  if (circleItems2) {
    for (let i = 0; i < circleCount2; i++) {
      circleItems2[i].style.width = DEFAULT_DIAMETER_MAX2 - diameterDelta2 * i + 'px'
      circleItems2[i].style.height = circleItems2[i].style.width
    }
  }
}

drawCircles2(circleItems2)
/* -------------------------------- */
