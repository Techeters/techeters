<template>
  <app-picture
    :url="url"
    :is-webp="false"
    :img-data="{
      'data-gl': '',
      'data-gl-parallax': '1',
      'data-src': url,
      'data-a-gl': '',
      'data-a-gl-progress': 0,
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