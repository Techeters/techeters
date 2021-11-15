<template>
  <main v-editable="story.content">
    <div id="gl-3"></div>
    <div class="noisy"></div>
    <hero-section />
    <section data-in-view class="section home-2">
      <simple-section :text="secondScreenText" img="/img/1.jpg" />
    </section>
    <section data-in-view class="section home-3">
      <div class="container home-3__container">
        <h2 class="h2 home-3__h grid">
          <span data-a-h class="home-3__h-line home-3__h-line--1">
            We combine
          </span>
          <span class="home-3__h-line home-3__h-line--2">
            <span data-a-h>design</span>
          </span>
          <span
            data-a-h
            class="home-3__h-line home-3__h-line--3"
            v-html="replaceToPixel('and technology', 'and')"
          />
        </h2>
        <div class="home-3__text grid">
          <p data-a-hl class="home-3__p home-3__p--1">
            {{ thirdScreenText1 }}
          </p>
          <p data-a-hl class="home-3__p home-3__p--2">
            {{ thirdScreenText2 }}
          </p>
        </div>
        <div class="home-3__img-wrapper grid">
          <gl-picture url="/img/2.jpg" class="home-3__img" />
        </div>
      </div>
    </section>
    <section class="section home-4">
      <div class="container home-4__container">
        <ul class="home-4__items">
          <li
            v-for="(item, idx) in home4Items"
            :key="item._uid"
            data-in-view
            class="home-4__item home-4-item"
          >
            <div data-a-d class="home-4-item__idx">0{{ idx + 1 }}</div>
            <div data-a-l class="line home-4-item__line"></div>
            <div class="home-4-item__content grid">
              <h3 data-a-d class="home-4-item__h">{{ item.title }}</h3>
              <div class="home-4-item__right">
                <p data-a-hl class="home-4-item__text">
                  {{ item.text }}
                </p>
                <gl-picture :url="item.img" class="home-4__img" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <app-sticky>
      <border-section class="home-5" data-section-scale>
        <div class="bg-gradient home-5__img" />
        <div class="container home-5__container" data-section-sticky-scroller>
          <div class="home-5__h-wrapper grid">
            <h2
              class="h2 home-5__h"
              v-html="replaceToPixel('Services', 'e')"
            ></h2>
          </div>
          <ul class="home-5__items">
            <li
              v-for="item in services"
              :key="item._uid"
              class="home-5__item home-5-item"
            >
              <div class="line line--white home-5-item__line"></div>
              <div class="home-5-item__content grid">
                <h3 class="h3 home-5-item__h">
                  {{ item.title }}
                </h3>
                <p class="home-5-item__text">{{ item.text }}</p>
              </div>
            </li>
          </ul>
        </div>
      </border-section>
    </app-sticky>
    <section class="section home-6" data-in-view>
      <app-ticker
        class="home-6__ticker"
        :text="sixthScreen.title"
        divider="&nbsp;&nbsp;•&nbsp;&nbsp;"
      />
      <simple-section
        :text="sixthScreen.text"
        class="home-6__content"
        img="/img/6.jpg"
      />
    </section>
    <section data-in-view class="section home-7">
      <div class="container home-7__container">
        <h2 class="h2 home-7__h2 grid">
          <span data-a-h class="home-7__h2-line home-7__h2-line--1"
            >We are</span
          >
          <span data-a-h class="home-7__h2-line home-7__h2-line--2 pixel-str"
            >known</span
          >
          <span class="home-7__h2-line home-7__h2-line--3">
            <span data-a-h>and noteworthy</span>
          </span>
        </h2>
        <ul class="home-7__items grid">
          <li
            v-for="item in publications"
            :key="item._uid"
            class="home-7__item"
          >
            <a
              class="home-7__item-link"
              target="_blank"
              rel="noreferer noopener"
              :href="item.link"
            >
              <gl-picture class="home-7__img" :url="item.img" />
              <div data-a-o class="home-7__item-h">
                <span>{{ item.title }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <app-footer />
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import HeroSection from '~/components/HeroSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppTicker from '~/components/AppTicker.vue'
import AppSticky from '~/components/AppSticky.vue'
import BorderSection from '~/components/BorderSection.vue'
import SimpleSection from '~/components/SimpleSection.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
import GlPicture from '~/components/GlPicture.vue'
import { delayPromise } from '~/scripts/utils/delay'
import homeStory from '~/mixins/stories/home.vue'
import storyBridge from '~/mixins/storyBridge.vue'

export default {
  components: {
    HeroSection,
    BorderSection,
    AppTicker,
    SimpleSection,
    AppFooter,
    GlPicture,
    AppSticky,
  },
  mixins: [replaceToPixel, homeStory, storyBridge],

  head() {
    const { title, description } = this.story.content.meta[0]
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          name: 'og:title',
          content: description,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },

  beforeDestroy() {
    window.scetch && window.scetch.destroy()
    window.scetch2 && window.scetch2.destroy()
    window.scetch3 && window.scetch3.destroy()

    this.sa && this.sa.destroy()
  },

  async mounted() {
    const { initImages } = await import('~/scripts/GL/Images/init')
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }

    const { Scetch } = await import('@emotionagency/glhtml')
    const { raf } = await import('@emotionagency/utils')

    const { default: Waves } = await import('@/scripts/GL/Waves/Waves')

    window.scetch2 = new Scetch('#gl-2', {
      dpr: window.devicePixelRatio,
      nodes: [
        {
          $el: document.querySelector('.home-1__img'),
          Figure: Waves,
        },
      ],
      raf,
    })

    const { default: Noisy } = await import('@/scripts/GL/Noisy/Noisy')

    const noisy = document.querySelector('.noisy')

    window.scetch3 = new Scetch('#gl-3', {
      dpr: window.devicePixelRatio,
      nodes: [
        {
          $el: noisy,
          Figure: Noisy,
        },
      ],
      raf,
    })

    const { animations } = await import('~/scripts/animations')

    await delayPromise(500)
    window.scetch2?.figures[0]?.changeIntensity()

    animations(document.querySelector('.hero-wrapper')).in()

    const { default: ScrollAnimations } = await import(
      '~/scripts/scroll/ScrollAnimations'
    )

    this.sa = new ScrollAnimations()

    const { SectionScale } = await import('~/scripts/SectionScale')

    new SectionScale(document.querySelectorAll('[data-section-scale]'))
  },
}
</script>