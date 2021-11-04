import gsap from 'gsap'
import { TextAnimate } from './textAnimate'
import { delayPromise } from './utils/delay'

const ease = 'power2.out'

export const animations = async $el => {
  const $h = $el.querySelectorAll('[data-a-h]')
  const $hl = $el.querySelectorAll('[data-a-hl]')
  const $t = $el.querySelectorAll('[data-a-t]')
  const $o = $el.querySelectorAll('[data-a-o]')

  const tl = gsap.timeline()

  if ($h.length) {
    $h.forEach(async (el, i) => {
      await delayPromise(150 * i)
      TextAnimate.in(el)
    })
  }

  if ($hl.length) {
    await delayPromise(500)
    $hl.forEach(async (el, i) => {
      await delayPromise(150 * i)
      TextAnimate.in(el, 'lines')
    })
  }

  tl.to($t, { duration: 1.5, x: 0, opacity: 1, ease, stagger: 0.2 }, 0.5)
  tl.to($o, { duration: 1.5, opacity: 1, ease, stagger: 0.2 }, 0.5)
}
