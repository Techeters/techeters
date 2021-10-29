<template>
  <component :is="tag" class="border-section">
    <div class="border-section__wrapper">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'section',
    },
  },
}
</script>