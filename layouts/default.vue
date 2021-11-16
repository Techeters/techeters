<template>
  <div id="app">
    <app-loader />
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
import AppLoader from '~/components/AppLoader.vue'
import AppGrid from '~/components/AppGrid.vue'
import FormThankyou from '~/components/AppForm/FormThankyou.vue'
import FormPopup from '~/components/AppForm/FormWindow.vue'
export default {
  components: { AppGrid, FormThankyou, FormPopup, AppLoader },

  async mounted() {
    const { default: NavbarPos } = await import('~/scripts/utils/navbarPos')
    this.navbarPos = new NavbarPos()
    this.navbarPos.init()
  },
}
</script>