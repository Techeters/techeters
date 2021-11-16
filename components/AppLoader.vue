<template>
  <div v-if="!completed" class="loader">
    <div class="container loader__container">
      <div class="loader__top">
        <div class="loader__progress"></div>
        <div class="loader__ui">
          <div class="loader__logo">
            <app-logo />
          </div>
          <div class="loader__percent">
            <span class="loader__percent-span">0%</span>
          </div>
        </div>
      </div>
      <div ref="h" class="grid h2 popup-h">
        <span class="popup-h__line popup-h__line--1">Marketing</span>
        <span
          class="popup-h__line popup-h__line--2"
          v-html="replaceToPixel('and creative', 'and')"
        />
        <span class="popup-h__line popup-h__line--3">
          <span> Agency </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import emitter from 'tiny-emitter/instance'

import AppLogo from './AppLogo.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
export default {
  components: { AppLogo },
  mixins: [replaceToPixel],

  data() {
    return {
      completed: false,
    }
  },

  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }

    const { setWinSizes } = await import('~/scripts/utils/winSizes')

    setWinSizes()

    const { Scetch } = await import('@emotionagency/glhtml')

    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 960,
      passive: false,
      isFixed: true,
      friction: 0.06,
      stepSize: 0.9,
      useKeyboard: false,
      raf,
    })

    if (screen.width > 960) {
      window.scetch = new Scetch('#gl', {
        raf,
        dpr: window.devicePixelRatio,
      })

      emitter.emit('scetchCreated')
    }

    const { Loader } = await import('~/scripts/Loader')
    this.loader = new Loader(this.afterLoad)
    this.loader.init()
  },

  methods: {
    afterLoad() {
      this.$store.commit('app/setLoaded', true)
      this.$emit('loaded')
      this.animation()
      window.ss && (window.ss.isFixed = false)
    },

    animation() {
      gsap.to(this.$el, {
        duration: 1.8,
        opacity: 0,
        filter: 'blur(100px)',
        ease: 'power2.inOut',
        onComplete: () => {
          this.completed = true
        },
      })
    },
  },
}
</script>