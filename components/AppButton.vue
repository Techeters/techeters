<template>
  <component
    :is="tag"
    :href="href && href"
    :to="href && href"
    :type="type && type"
    :rel="target && 'noreferrer noopener'"
    :target="target && target"
    class="btn"
  >
    <span class="btn__text js-sticky-item" data-power="40, 7"><slot /></span>
    <span
      class="btn__bg js-sticky-item"
      data-power="60, 60"
      data-scale="0.8"
    ></span>
    <span class="btn__border js-sticky-item" data-power="40, 7"></span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
    },
    type: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  async mounted() {
    const { default: Button } = await import('~/scripts/Button')

    this.button = new Button(this.$el)
  },
  beforeDestroy() {
    this.button && this.button.destroy()
  },
}
</script>