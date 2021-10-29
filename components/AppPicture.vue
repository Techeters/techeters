<template>
  <div class="picture-wrapper">
    <div class="app-picture">
      <picture>
        <img :src="url" alt="" class="app-img" />
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