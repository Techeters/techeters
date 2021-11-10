<template>
  <app-picture
    :url="url"
    :img-data="{
      'data-gl': '',
      'data-gl-parallax': '1',
      'data-src': finalUrl,
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

  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },
    finalUrl() {
      return this.$store.state.app.isWebp ? this.getWebpUrl : this.url
    },
  },
}
</script>