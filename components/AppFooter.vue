<template>
  <border-section class="section footer" tag="footer">
    <app-picture url="/img/gradient.jpg" :is-webp="false" class="footer__img" />
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
              <a href="#" class="footer-social__link">Instagram</a>
            </li>
            <li class="footer-social__item">
              <a href="#" class="footer-social__link">Facebook</a>
            </li>
            <li class="footer-social__item">
              <a href="#" class="footer-social__link">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="footer__form footer-form">
          <h3 class="footer__h3 footer-form__h">Get in touch</h3>
          <app-form />
        </div>
      </div>
      <div class="footer__bottom grid">
        <a href="#" class="footer__made-by">made by emotion</a>
        <a href="#" class="footer__pp">Privacy Policy</a>
      </div>
    </div>
  </border-section>
</template>

<script>
import AppPicture from './AppPicture.vue'
import AppLogo from './AppLogo.vue'
import BorderSection from './BorderSection.vue'
import AppForm from './AppForm/AppForm.vue'
import replaceToPixel from '~/mixins/replaceToPixel.vue'

export default {
  components: { BorderSection, AppPicture, AppLogo, AppForm },
  mixins: [replaceToPixel],
}
</script>