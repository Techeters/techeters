import { clamp, matrixTransform, raf } from '@emotionagency/utils'

export class Sticky {
  constructor($el, $wrapper) {
    this.$el = $el
    this.$wrapper = $wrapper
    this.$container = this.$wrapper.parentElement
    this.$sc = document.querySelector('#scroll-container')

    this.init()
  }

  init() {
    this.animate = this.animate.bind(this)

    raf.on(this.animate)
  }

  get elHeight() {
    return this.$el.getBoundingClientRect().height
  }

  get scrollHeight() {
    return this.elHeight - window.innerHeight
  }

  get offset() {
    const top = this.$container.getBoundingClientRect().top
    return clamp(top, 0, -this.scrollHeight)
    // return top
  }

  animate() {
    this.$container.style.height = this.elHeight + 'px'

    const t = matrixTransform({ move: { y: this.offset } })

    this.$el.style.transform = t
    this.$el.style.willChange = 'transform'
  }
}
