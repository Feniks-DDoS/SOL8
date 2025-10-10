import pxToRem from '@/utils/pxToRem'

const MatchMedia = {
  tablet: window.matchMedia(`(width <= ${pxToRem(1023)}rem)`),
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`),
  mobile_s: window.matchMedia(`(width <= ${pxToRem(480)}rem)`),
}

export default MatchMedia
