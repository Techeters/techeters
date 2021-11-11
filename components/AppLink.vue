<template>
  <component
    :is="tag"
    :href="tag === 'a' && to"
    :rel="tag === 'a' && 'noreferer noopener'"
    :target="tag === 'a' && '_blank'"
    :to="tag === 'nuxt-link' && to"
    class="e-link"
  >
    <span><slot /></span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    to: {
      type: String,
      default: '',
    },
  },
}
</script>