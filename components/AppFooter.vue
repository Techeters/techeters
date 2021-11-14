<template>
  <app-sticky>
    <footer data-section-scale>
      <border-section class="section footer" tag="div">
        <div class="bg-gradient footer__img" />
        <div class="container footer-container" data-section-sticky-scroller>
          <h2 class="h2 footer__h grid">
            <span class="footer__h-line footer__h-line--1">{{
              getField('footer', 'first_line')
            }}</span>
            <span
              class="footer__h-line footer__h-line--2"
              v-html="replaceToPixel(getField('footer', 'second_line'), 'our')"
            ></span>
          </h2>
          <div class="footer__content grid">
            <div class="footer__company">
              <div class="footer__logo">
                <app-logo />
              </div>
              <ul class="footer__adresses">
                <li class="footer__adress">
                  <div class="footer__adress-link">
                    {{ getField('contacts', 'adress_1') }}
                  </div>
                </li>
                <li class="footer__adress">
                  <div class="footer__adress-link">
                    {{ getField('contacts', 'adress_2') }}
                  </div>
                </li>
              </ul>
            </div>
            <div class="footer__social footer-social">
              <h3 class="footer__h3 footer-social__h">Social</h3>
              <ul class="footer-social__items">
                <li
                  v-for="item in social"
                  :key="item.to"
                  class="footer-social__item"
                >
                  <app-link :to="item.to" class="footer-social__link">
                    {{ item.name }}
                  </app-link>
                </li>
              </ul>
            </div>
            <div class="footer__form footer-form">
              <h3 class="footer__h3 footer-form__h">Get in touch</h3>
              <app-form @showThankyou="openThankyou" />
            </div>
          </div>
          <div class="footer__bottom grid">
            <app-link to="#" class="footer__made-by">made by emotion</app-link>
            <app-link
              :to="getField('contacts', 'privacy_policy')"
              class="footer__pp"
              >Privacy Policy</app-link
            >
          </div>
        </div>
      </border-section>
      <form-thankyou :visible="thankyou" @closeThankyou="thankyou = false" />
    </footer>
  </app-sticky>
</template>

<script>
import AppLogo from './AppLogo.vue'
import BorderSection from './BorderSection.vue'
import AppForm from './AppForm/AppForm.vue'
import AppLink from './AppLink.vue'
import FormThankyou from './AppForm/FormThankyou.vue'
import AppSticky from './AppSticky.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'
import globalStory from '~/mixins/stories/global.vue'

export default {
  components: {
    BorderSection,
    AppLogo,
    AppForm,
    AppLink,
    FormThankyou,
    AppSticky,
  },
  mixins: [replaceToPixel, globalStory],

  data() {
    return {
      thankyou: false,
    }
  },

  computed: {
    social() {
      return [
        {
          name: 'Instagram',
          to: this.getField('contacts', 'instagram'),
        },
        {
          name: 'Facebook',
          to: this.getField('contacts', 'facebook'),
        },
        {
          name: 'Linkedin',
          to: this.getField('contacts', 'linkedin'),
        },
        {
          name: 'Twitter',
          to: this.getField('contacts', 'twitter'),
        },
        {
          name: 'Tiktok',
          to: this.getField('contacts', 'tiktok'),
        },
      ]
    },
  },
  methods: {
    openThankyou() {
      this.thankyou = true
    },
  },
}
</script>