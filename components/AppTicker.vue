<template>
  <div class="ticker">
    <div ref="ticker" class="ticker__items">
      <div
        v-for="index in repeatNumber"
        :key="index"
        class="ticker__item"
        v-html="`&nbsp; ${divider} ${text}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    duration: {
      type: Number,
      default: 40,
    },
    multiplier: {
      type: Number,
      default: 21,
    },
    divider: {
      type: String,
      default: '—',
    },
  },
  computed: {
    repeatNumber() {
      let number = Math.max(
        Math.ceil((this.multiplier / this.text.length) * 4),
        2
      )

      number = number % 2 === 0 ? number : number + 1
      return number
    },
  },
  mounted() {
    this.tickerInit()
  },
  beforeDestroy() {
    this.ticker.destroy()
  },
  methods: {
    async tickerInit() {
      const { Ticker } = await import('~/scripts/Ticker')

      this.ticker = new Ticker({
        $el: this.$refs.ticker,
        duration: this.duration,
      })

      this.ticker.init()
    },
  },
}
</script>
