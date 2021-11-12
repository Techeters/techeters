<template>
  <transition
    :css="false"
    @enter="enter"
    @beforeEnter="startTimer"
    @leave="leave"
  >
    <div v-show="visible" class="thankyou">
      <div ref="thankyouBg" class="thankyou__bg"></div>
      <div ref="content" class="container thankyou__container">
        <div ref="h" class="grid h2 popup-h">
          <span data-a-h class="popup-h__line popup-h__line--1">Thank you</span>
          <span
            data-a-h
            class="popup-h__line popup-h__line--2"
            v-html="replaceToPixel('your message', 'your')"
          />
          <span class="popup-h__line popup-h__line--3">
            <span data-a-h> has been sent </span>
          </span>
        </div>
        <div ref="timer" class="thankyou__timer" data-a-o>
          This window will close automatically after {{ timer }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
import replaceToPixel from '~/mixins/replaceToPixel'
import { delayPromise } from '~/scripts/utils/delay'
const TIME = 5
export default {
  mixins: [replaceToPixel],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timer: TIME,
    }
  },

  methods: {
    startTimer() {
      const interval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(interval)
          return
        }
        this.timer -= 1
      }, 1000)
    },
    async enter(_, done) {
      this.timer = TIME

      const { animations } = await import('~/scripts/animations')

      this.$el.style.opacity = 1

      gsap.to(this.$refs.thankyouBg, {
        duration: 1.5,
        ease: 'power2.out',
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        overwrite: true,
        onComplete: () => {
          setTimeout(() => {
            this.$emit('closeThankyou')
          }, TIME * 1000)
          done()
        },
      })

      gsap.to(this.$refs.timer, {
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out',
        opacity: 1,
        overwrite: true,
      })

      await delayPromise(1000)
      animations(this.$el).in()
    },
    async leave(el, done) {
      const { animations } = await import('~/scripts/animations')
      animations(this.$el).out()

      gsap.to(el, {
        duration: 1.5,
        delay: 0.5,
        opacity: 0,
        ease: 'power2.out',
        overwrite: true,
      })

      gsap.to(this.$refs.thankyouBg, {
        duration: 1.5,
        ease: 'power2.out',
        opacity: 0,
        scale: 10,
        delay: 0.5,
        filter: 'blur(60px)',
        overwrite: true,
        onComplete: done,
      })
    },
  },
}
</script>