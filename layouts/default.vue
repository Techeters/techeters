<template>
  <div id="app">
    <app-grid />
    <div id="scroll-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppGrid from '~/components/AppGrid.vue'
export default {
  components: { AppGrid },

  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }

    const { setWinSizes } = await import('~/scripts/utils/winSizes')

    setWinSizes()

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

    const { default: NavbarPos } = await import('~/scripts/utils/navbarPos')
    this.navbarPos = new NavbarPos()
    this.navbarPos.init()
  },
}
</script>