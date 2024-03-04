'strict mode'

/* -------------------------------- */
/* Концентрические круги для секции testimonial */
let DEFAULT_DIAMETER_MAX = 1247
let DEFAULT_DIAMETER_MIN = 391

let diameterMax = document.querySelector('.section-testimonial__inner').offsetWidth
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

diameterMax = document.querySelector('.section-partners__inner').offsetWidth
diameterMax = diameterMax < DEFAULT_DIAMETER_MAX ? DEFAULT_DIAMETER_MAX : diameterMax

const circleItemsPartners = document.querySelectorAll('.list-half-circle__item')
circleCount = circleItemsPartners.length

diameterDelta = (diameterMax - DEFAULT_DIAMETER_MIN) / (circleCount - 1)

drawCircles(circleItemsPartners)
/* -------------------------------- */
