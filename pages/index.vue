<template>
  <main>
    <section class="section section--nm hero home-1">
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
    </section>
    <section class="section home-2">
      <div class="container home-2__container">
        <div class="home-2__content grid">
          <p class="home-2__text big-text">
            Techeters is a marketing and creative agency that offers technology
            clients marketing solutions by combining creative approaches with
            analytic and technical execution. We partner with innovative
            technology companies that provide high level value to society and
            make the world a better place.
          </p>
          <app-picture
            url="/img/thumb.jpg"
            :is-webp="false"
            class="home-2__img"
          />
        </div>
      </div>
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
            <div class="home-4-item__line"></div>
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
    <section class="section"></section>
  </main>
</template>

<script>
import AppPicture from '~/components/AppPicture.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
import { keysGenerator } from '~/scripts/utils/keysGenerator'
export default {
  components: { AppPicture },
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
    }
  },
}
</script>