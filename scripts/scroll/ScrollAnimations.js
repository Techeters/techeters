import { raf } from '@emotionagency/utils'
import { animations } from '../animations'
import ScrollInView from './ScrollInView.js'

class ScrollAnimations extends ScrollInView {
  constructor() {
    super()

    this.sections = document.querySelectorAll('[data-in-view]')
    this.scrollInView = () =>
      new ScrollInView(this.sections, this.sectionAnimation, 0.5)

    raf.on(this.scrollInView)
  }

  sectionAnimation(elem) {
    animations(elem).in()
  }

  destroy() {
    raf.off(this.scrollInView)
  }
}

export default ScrollAnimations
