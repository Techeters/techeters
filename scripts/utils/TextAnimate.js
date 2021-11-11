import Splitting from 'splitting'
import SplitType from 'split-type'
import gsap from 'gsap'
import { shuffle } from './shuffle'

export class TextAnimate {
  static prepare($el, by = 'chars') {
    let $toAnimate
    if ($el.classList.contains('splitted')) {
      return
    }

    if (by === 'chars') {
      Splitting({ target: $el, by: 'chars' })

      $toAnimate = [...$el.querySelectorAll('.char')]
      $toAnimate = shuffle($toAnimate)
    }

    if (by === 'lines') {
      new SplitType($el, {
        types: 'lines',
        tagName: 'span',
        lineClass: 'e-line',
      })

      $toAnimate = [...$el.querySelectorAll('.e-line')]

      $toAnimate.forEach(el => {
        el.innerHTML = `<span class="line-inner">${el.innerHTML}</span>`
      })

      $toAnimate = [...$el.querySelectorAll('.line-inner')]
    }

    $el.classList.add('splitted')

    return $toAnimate
  }

  static in($el, by = 'chars') {
    const $toAnimate = this.prepare($el, by)

    $el.style.opacity = 1
    const duration = $el.dataset.aH?.split(',')[0] || 1
    const stagger = $el.dataset.aH?.split(',')[1] || 0.08

    if (by === 'chars') {
      this.byChars($toAnimate, duration, stagger)
    }

    if (by === 'lines') {
      this.byLines($toAnimate)
    }
  }

  static byChars($el, duration, stagger) {
    gsap.to($el, {
      duration,
      opacity: 1,
      ease: 'power2.out',
      scaleX: 1,
      filter: 'blur(0px)',
      stagger,
      overwrite: true,
    })
  }

  static byLines($el) {
    gsap.to($el, {
      duration: 1.4,
      ease: 'expo.out',
      y: 0,
      stagger: 0.1,
      delay: 0.2,
    })
  }
}
