<template>
  <app-picture
    :url="url"
    :is-webp="false"
    :img-data="{
      'data-gl': '',
      'data-gl-parallax': '1',
      'data-src': url,
    }"
  />
</template>

<script>
import AppPicture from './AppPicture.vue'
export default {
  components: { AppPicture },
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>