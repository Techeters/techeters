<template>
  <div class="sticky-wrapper">
    <div data-section-sticky>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const { Sticky } = await import('~/scripts/Sticky')

    new Sticky(
      this.$el.querySelector('[data-section-sticky-scroller]'),
      this.$el.querySelector('[data-section-sticky]')
    )
  },
}
</script>