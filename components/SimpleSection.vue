<template>
  <div class="simple-section">
    <div class="container simple-section__container">
      <div class="simple-section__content grid">
        <p class="simple-section__text big-text">
          {{ text }}
        </p>
        <gl-picture :url="img" class="simple-section__img" />
      </div>
    </div>
  </div>
</template>

<script>
import GlPicture from './GlPicture.vue'
export default {
  components: { GlPicture },
  props: {
    img: {
      type: String,
      default: '/img/thumb.jpg',
    },
    text: {
      type: String,
      default: 'Lorem ipsum',
    },
  },
}
</script>