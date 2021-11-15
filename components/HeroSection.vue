<template>
  <div class="hero-wrapper">
    <div class="home-1__img" />
    <border-section class="section section--nm hero home-1 autoheight">
      <div id="gl-2" />
      <div class="container home-1__container grid">
        <div class="h1 home-1__h1 grid">
          <span data-a-h="1.2, 0.12" class="home-1__h1-line home-1__h1-line--1">
            We are
          </span>
          <h1 data-a-hl="white" class="home-1__desc">
            Where technology and design come together
          </h1>
          <span
            class="home-1__h1-line home-1__h1-line--2 glitch"
            data-alt-text="Techeters"
            data-a-h="1.2, 0.12"
            v-html="replaceToPixel('Techeters', 'ech')"
          ></span>
          <span data-a-h="1.2, 0.12" class="home-1__h1-line home-1__h1-line--3"
            >Media</span
          >
        </div>
        <app-button
          data-a-o
          class="home-1__btn"
          @click.native="$store.commit('app/setPopup', true)"
        >
          Start your journey
        </app-button>
      </div>
    </border-section>
  </div>
</template>

<script>
import gsap from 'gsap'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
import { delayPromise } from '~/scripts/utils/delay'
export default {
  mixins: [replaceToPixel],

  methods: {
    async disolve() {
      const { animations } = await import('~/scripts/animations')
      const tl = gsap.timeline()

      window.scetch2?.figures[0]?.changeIntensity(20)

      tl.to(
        this.$el,
        {
          duration: 2,
          opacity: 0,
          filter: 'blur(100px)',
          ease: 'power2.inOut',
          onComplete: () => {
            window.ss && (window.ss.isFixed = false)
            window.scetch2?.destroy()
            this.$el.style.display = 'none'
          },
        },
        0.2
      )

      await delayPromise(1200)
      animations(document.querySelector('[data-ha]')).in()
    },
  },
}
</script>