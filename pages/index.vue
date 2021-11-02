<template>
  <main>
    <border-section class="section section--nm hero home-1">
      <app-picture url="/img/hero.jpg" :is-webp="false" class="home-1__img" />
      <div class="container home-1__container grid">
        <div class="h1 home-1__h1 grid">
          <span class="home-1__h1-line home-1__h1-line--1">We are</span>
          <h1 class="home-1__desc">
            Where technology and design come together
          </h1>
          <span
            class="home-1__h1-line home-1__h1-line--2"
            v-html="replaceToPixel('Techeters', 'ech')"
          ></span>
          <span class="home-1__h1-line home-1__h1-line--3">Media</span>
        </div>
        <app-button class="home-1__btn">Start your journey</app-button>
      </div>
    </border-section>
    <section class="section home-2">
      <simple-section
        text="Techeters is a marketing and creative agency that offers technology
            clients marketing solutions by combining creative approaches with
            analytic and technical execution. We partner with innovative
            technology companies that provide high level value to society and
            make the world a better place."
        img="/img/thumb.jpg"
      />
    </section>
    <section class="section home-3">
      <div class="container home-3__container">
        <h2 class="h2 home-3__h grid">
          <span class="home-3__h-line home-3__h-line--1">We combine</span>
          <span class="home-3__h-line home-3__h-line--2">design</span>
          <span
            class="home-3__h-line home-3__h-line--3"
            v-html="replaceToPixel('and technology', 'and')"
          ></span>
        </h2>
        <div class="home-3__text grid">
          <p class="home-3__p home-3__p--1">
            Great marketing is the utilization of creative designs with advance
            technology to distribute entertaining content to the right
            audiences. We utilize top marketing software along with data
            collection and analytics to stay ahead of the game.
          </p>
          <p class="home-3__p home-3__p--2">
            We respect creative individuals to express themselves through their
            art to encourage beautiful creatives for your brand. We also stay on
            top of new marketing technologies to help distribute, manage and
            analyze campaigns to make smarter decisions.
          </p>
        </div>
        <div class="home-3__img-wrapper grid">
          <app-picture
            url="/img/thumb.jpg"
            :is-webp="false"
            :img-data="{
              'data-gl': '',
              'data-gl-parallax': '1',
              'data-src': '/img/thumb.jpg',
            }"
            class="home-3__img"
          />
        </div>
      </div>
    </section>
    <section class="section home-4">
      <div class="container home-4__container">
        <ul class="home-4__items">
          <li
            v-for="(item, idx) in home4Items"
            :key="item._id"
            class="home-4__item home-4-item"
          >
            <div class="home-4-item__idx">0{{ idx + 1 }}</div>
            <div class="line home-4-item__line"></div>
            <div class="home-4-item__content grid">
              <h3 class="home-4-item__h">{{ item.title }}</h3>
              <div class="home-4-item__right">
                <p class="home-4-item__text">
                  {{ item.text }}
                </p>
                <app-picture
                  :url="item.img"
                  :is-webp="false"
                  class="home-4__img"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <border-section class="home-5">
      <app-picture
        url="/img/gradient.jpg"
        :is-webp="false"
        class="home-5__img"
      />
      <div class="container home-5__container">
        <div class="home-5__h-wrapper grid">
          <h2
            class="h2 home-5__h"
            v-html="replaceToPixel('Services', 'e')"
          ></h2>
        </div>
        <ul class="home-5__items">
          <li
            v-for="item in home5Items"
            :key="item._id"
            class="home-5__item home-5-item"
          >
            <div class="line line--white home-5-item__line"></div>
            <div class="home-5-item__content grid">
              <h3 class="h3 home-5-item__h">{{ item.title }}</h3>
              <p class="home-5-item__text">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </border-section>
    <section class="section home-6">
      <app-ticker
        class="home-6__ticker"
        text="Marketing is a combination of art and technology"
        divider="&nbsp;&nbsp;•&nbsp;&nbsp;"
      />
      <simple-section
        text="We handle clients with ease and allow clients to focus on their own operations without having to manage us."
        class="home-6__content"
      />
    </section>
    <section class="section home-7">
      <div class="container home-7__container">
        <h2 class="h2 home-7__h2 grid">
          <span class="home-7__h2-line home-7__h2-line--1">We are</span>
          <span class="home-7__h2-line home-7__h2-line--2 pixel-str"
            >known</span
          >
          <span class="home-7__h2-line home-7__h2-line--3">and noteworthy</span>
        </h2>
        <ul class="home-7__items grid">
          <li class="home-7__item">
            <app-picture
              class="home-7__img"
              url="/img/thumb.jpg"
              :is-webp="false"
            />
            <div class="home-7__item-h">Lorem ipsum</div>
          </li>
          <li class="home-7__item">
            <app-picture
              class="home-7__img"
              url="/img/thumb.jpg"
              :is-webp="false"
            />
            <div class="home-7__item-h">Lorem ipsum</div>
          </li>
          <li class="home-7__item">
            <app-picture
              class="home-7__img"
              url="/img/thumb.jpg"
              :is-webp="false"
            />
            <div class="home-7__item-h">Lorem ipsum</div>
          </li>
        </ul>
      </div>
    </section>
    <app-footer />
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import AppFooter from '~/components/AppFooter.vue'
import AppPicture from '~/components/AppPicture.vue'
import AppTicker from '~/components/AppTicker.vue'
import BorderSection from '~/components/BorderSection.vue'
import SimpleSection from '~/components/SimpleSection.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
import { keysGenerator } from '~/scripts/utils/keysGenerator'
export default {
  components: {
    AppPicture,
    BorderSection,
    AppTicker,
    SimpleSection,
    AppFooter,
  },
  mixins: [replaceToPixel],
  data() {
    return {
      home4Items: [
        {
          _id: keysGenerator(8),
          title: 'Drop the CMO',
          text: 'Chief Marketing Officers are a huge cost for small companies, even before building out a marketing department. A small in-house marketing team costs $40,000-$50,000 USD every month for salaries alone. Recruiting and software costs increase marketing department overhead costs.',
          img: '/img/thumb.jpg',
        },
        {
          _id: keysGenerator(8),
          title: 'Tech companies build tech, not marketing',
          text: 'Technology companies should focus on what they are best at, which is building technology. Many technology CEOs do not have the ability to manage marketing departments. Taking time away from product development can slow growth and harm progress',
          img: '/img/thumb.jpg',
        },
        {
          _id: keysGenerator(8),
          title: 'Save time and increase quality',
          text: 'Recruiting, operational development, and daily management leads to huge time constraints for companies. Quality is not guaranteed with an in-house team.  Trust your marketing efforts to the professionals to ensure high levels of quality control',
          img: '/img/thumb.jpg',
        },
      ],
      home5Items: [
        {
          _id: keysGenerator(8),
          title: 'Branding',
          text: 'It takes just 3 seconds for your first impression to be made. Making yourself look good is not vanity. Many opportunities are lost based on poor branding standards. We ensure that you not only look good, but do so consistently across all channels.',
        },
        {
          _id: keysGenerator(8),
          title: 'Full Marketing Services',
          text: 'There are no half measures when it comes to marketing.  All things are connected in an online marketing effort. Picking and choosing services leads to failure. We ensure that all efforts flow together for the highest levels of efficiency and results',
        },
        {
          _id: keysGenerator(8),
          title: 'Marketing Strategy',
          text: 'No one goes blindly into business ventures without a good plan.  Taking time to build out strong value propositions, distribution channels, content strategies and deep market research allows for strong marketing efforts. Gaining an edge on competition while finding gaps in the market takes business to the next level',
        },
      ],
    }
  },

  async mounted() {
    const { initImages } = await import('~/scripts/GL/Images/init')
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }
  },
}
</script>