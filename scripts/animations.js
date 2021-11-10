import gsap from 'gsap'
import { TextAnimate } from './utils/TextAnimate'
import { delayPromise } from './utils/delay'
import { DecodeAnimation } from './DecodeAnimations'

const ease = 'power2.out'

export const animations = $el => {
  const $h = $el.querySelectorAll('[data-a-h]')
  const $hl = $el.querySelectorAll('[data-a-hl]')
  const $t = $el.querySelectorAll('[data-a-t]')
  const $o = $el.querySelectorAll('[data-a-o]')
  const $d = $el.querySelectorAll('[data-a-d]')
  const $gl = $el.querySelectorAll('[data-a-gl]')
  const $l = $el.querySelectorAll('[data-a-l]')

  const tl = gsap.timeline()

  if ($h.length) {
    $h.forEach(async (el, i) => {
      await delayPromise(150 * i)
      TextAnimate.in(el)
    })
  }

  if ($d.length) {
    $d.forEach(async (el, i) => {
      await delayPromise(150 * i)
      const da = new DecodeAnimation(el)
      da.animate()
    })
  }

  if ($hl.length) {
    $hl.forEach(async (el, i) => {
      await delayPromise(150 * i)
      TextAnimate.in(el, 'lines')
    })
  }

  $t.length &&
    tl.to($t, { duration: 1.5, y: 0, opacity: 1, ease, stagger: 0.2 }, 0.5)

  $l.length && tl.to($l, { duration: 1.5, scaleX: 1, ease, stagger: 0.2 }, 0)

  $o.length && tl.to($o, { duration: 1.5, opacity: 1, ease, stagger: 0.2 }, 0.5)

  $gl.forEach(el => {
    const progress = {
      value: 0,
    }

    tl.to(
      progress,
      {
        duration: 1.5,
        value: 1,
        ease,
        onUpdate: () => {
          el.setAttribute('data-a-gl-progress', progress.value)
        },
      },
      0.3
    )
  })
}
