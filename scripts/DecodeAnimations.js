import SplitType from 'split-type'
import gsap from 'gsap'
import { shuffle } from './utils/shuffle'

export class DecodeAnimation {
  constructor($el) {
    this.$el = $el

    this.animate = this.animate.bind(this)
    this.init()
  }

  init() {
    this.words = this.prepare()
  }

  prepare() {
    let $wordAnimate

    if (this.$el.classList.contains('splitted')) {
      return
    }

    new SplitType(this.$el, {
      types: 'words',
      tagName: 'span',
    })

    $wordAnimate = [...this.$el.querySelectorAll('.word')]

    $wordAnimate = shuffle($wordAnimate)

    $wordAnimate.forEach(el => {
      el.innerHTML = `
        <span class="word-revealer"></span>
        <span class="word-text">${el.innerHTML}</span>`
    })

    this.$el.classList.add('splitted')

    return $wordAnimate
  }

  animate() {
    const stagger = 0.03

    this.$el.style.opacity = 1

    this.words.forEach((word, idx) => {
      const revealer = word.querySelector('.word-revealer')
      const text = word.querySelector('.word-text')

      setTimeout(() => {
        const tl = gsap.timeline()
        tl.to(revealer, { duration: 0.1, opacity: 1, stagger }, 0)
        tl.to(revealer, { duration: 0.1, opacity: 0, stagger }, 0.1)
        tl.to(revealer, { duration: 0.1, opacity: 1, stagger }, 0.2)
        tl.to(revealer, { duration: 0.1, opacity: 0, stagger }, 0.3)

        tl.to(text, { duration: 0.1, opacity: 0, stagger }, 0)
        tl.to(text, { duration: 0.1, opacity: 1, stagger }, 0.1)
        tl.to(text, { duration: 0.1, opacity: 0, stagger }, 0.2)
        tl.to(text, { duration: 0.1, opacity: 1, stagger }, 0.3)
      }, idx * (stagger * 1000))
    })
  }
}
