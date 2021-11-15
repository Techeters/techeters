<template>
  <div class="form-pop-up" :class="[visible && 'form-pop-up--visible']">
    <div class="form-pop-up__backdrop" @click="close"></div>
    <div class="form-pop-up__content">
      <button aria-label="close the form" class="form__close" @click="close">
        <span class="form__close-line"></span>
        <span class="form__close-line"></span>
      </button>
      <div class="bg-gradient form__pop-up-bg"></div>
      <div class="h3 form-popup__h">Lets start your journey</div>
      <app-form class="form-pop-up__form" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.app.isPopupOpen
    },
  },
  watch: {
    visible() {
      window.ss && (window.ss.isFixed = this.visible)
    },
  },
  methods: {
    close() {
      this.$store.commit('app/setPopup', false)
    },
  },
}
</script>