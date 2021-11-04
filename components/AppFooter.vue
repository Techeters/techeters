<template>
  <border-section class="section footer" tag="footer">
    <div class="bg-gradient footer__img" />
    <div class="container footer-container">
      <h2 class="h2 footer__h grid">
        <span class="footer__h-line footer__h-line--1">Let's start</span>
        <span
          class="footer__h-line footer__h-line--2"
          v-html="replaceToPixel('your journey', 'our')"
        ></span>
      </h2>
      <div class="footer__content grid">
        <div class="footer__logo">
          <app-logo />
        </div>
        <div class="footer__social footer-social">
          <h3 class="footer__h3 footer-social__h">Social</h3>
          <ul class="footer-social__items">
            <li class="footer-social__item">
              <app-link to="#" class="footer-social__link">Instagram</app-link>
            </li>
            <li class="footer-social__item">
              <app-link to="#" class="footer-social__link">Facebook</app-link>
            </li>
            <li class="footer-social__item">
              <app-link to="#" class="footer-social__link">Linkedin</app-link>
            </li>
          </ul>
        </div>
        <div class="footer__form footer-form">
          <h3 class="footer__h3 footer-form__h">Get in touch</h3>
          <app-form />
        </div>
      </div>
      <div class="footer__bottom grid">
        <app-link to="#" class="footer__made-by">made by emotion</app-link>
        <app-link to="#" class="footer__pp">Privacy Policy</app-link>
      </div>
    </div>
  </border-section>
</template>

<script>
import AppLogo from './AppLogo.vue'
import BorderSection from './BorderSection.vue'
import AppForm from './AppForm/AppForm.vue'
import AppLink from './AppLink.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'

export default {
  components: { BorderSection, AppLogo, AppForm, AppLink },
  mixins: [replaceToPixel],
}
</script>