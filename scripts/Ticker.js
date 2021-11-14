import { raf, matrixTransform } from '@emotionagency/utils'

export class Ticker {
  time = 0
  targetY = 0

  directionResult = 1
  ease = 0.06

  constructor(opts) {
    this.$el = opts.$el
    this.$sc = document.querySelector('#scroll-container')
    this.duration = opts.duration
  }

  init() {
    this.animate = this.animate.bind(this)
    raf.on(this.animate)
  }

  get sizes() {
    return this.$el.getBoundingClientRect()
  }

  get scrollPos() {
    return this.$sc.scrollTop
  }

  get velocity() {
    const target = window.ss?.state?.target ?? 0
    return this.isScrolling ? this.scrollPos - target : 0
  }

  get isScrolling() {
    return window.ss?.state?.scrolling ?? false
  }

  get direction() {
    if (this.velocity < 0) {
      this.directionResult = -1
    }

    if (this.velocity > 0) {
      this.directionResult = 1
    }
    return this.directionResult * this.isMobile
  }

  get isMobile() {
    return window.innerWidth > 1060 ? 1 : -1
  }

  animate() {
    this.time += this.direction + this.velocity / 100

    const totalTime = this.time / 60

    if (totalTime > this.duration) {
      this.time = 0
    }

    if (-totalTime > this.duration) {
      this.time = -(this.duration / 2) * 60
    }

    const move = this.sizes.width * (totalTime / this.duration)

    this.targetY = move

    let percent = (this.targetY / this.sizes.width) * 100

    if (percent <= -50) {
      percent = 0
      this.targetY = 0
      this.time = 0
    }

    if (percent > 0) {
      percent = -50
      this.targetY = -this.sizes.width / 2
      this.time = -(this.duration / 2) * 60
    }

    this.transform(this.$el, this.targetY)
  }

  transform($el, pos) {
    $el.style.transform = `${matrixTransform({ move: { x: pos } })} skewX(${
      this.velocity / 50
    }deg)`
    $el.style.willChange = 'transform'
  }

  destroy() {
    raf.off(this.animate)
  }
}
