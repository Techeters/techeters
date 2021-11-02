<template>
  <div class="picture-wrapper">
    <div class="app-picture">
      <picture>
        <img ref="image" :src="url" alt="" class="app-img" v-bind="imgData" />
        <source v-if="isWebp" :srcset="getWebpUrl" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    isWebp: {
      type: Boolean,
      default: true,
    },
    imgData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },
  },
}
</script>