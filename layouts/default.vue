<template>
  <div id="app">
    <app-grid />
    <ui-loader />
    <div id="scroll-container">
      <Nuxt />
      <div id="gl"></div>
      <form-thankyou />
      <form-popup />
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import AppGrid from '~/components/AppGrid.vue'
import FormThankyou from '~/components/AppForm/FormThankyou.vue'
import FormPopup from '~/components/AppForm/FormWindow.vue'
export default {
  components: { AppGrid, FormThankyou, FormPopup },

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
      isFixed: false,
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

    const { default: NavbarPos } = await import('~/scripts/utils/navbarPos')
    this.navbarPos = new NavbarPos()
    this.navbarPos.init()
  },
}
</script>