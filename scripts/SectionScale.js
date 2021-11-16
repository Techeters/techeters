import { resize } from '@emotionagency/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class SectionScale {
  constructor($els = [], opts = {}) {
    this.$els = $els
    this.offset = opts.offset || 0
    this.breakpoint = opts.breakpoint || 960

    this.resize = this.resize.bind(this)

    resize.on(this.resize)
  }

  resize() {
    if (window.innerWidth > this.breakpoint) {
      this.animation()
    }
  }

  animation() {
    this.$els.forEach(el => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          pin: false,
          start: `top-=${100 - this.offset}%`,
          end: `+=${window.innerHeight}`,
          scroller: '#scroll-container',
          scrub: 0.1,
        },
      })
      tl.to(el, {
        scale: 1,
        opacity: 1,
        ease: 'linear.none',
      })
    })
  }
}
