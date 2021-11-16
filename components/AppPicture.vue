<template>
  <div class="picture-wrapper">
    <div class="app-picture">
      <picture>
        <source v-if="isWebp" :srcset="getWebpUrl" />
        <img
          ref="image"
          :src="url"
          alt=""
          class="app-img"
          v-bind="imgData"
          data-pli
        />
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