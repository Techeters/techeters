import imagesLoaded from 'imagesloaded'
import gsap from 'gsap'

const noop = () => {}

export class Loader {
  constructor(cb) {
    this.pli = document.querySelectorAll('[data-pli]')
    this.cb = cb ?? noop

    this.countImages = this.pli.length
    this.loadedLength = 0

    this.loader = document.querySelector('.loader')

    this.percentHTML = this.loader.querySelector('.loader__percent-span')
    this.percentLine = this.loader.querySelector('.loader__progress')

    this.num = { val: 0 }
    this.state = false
  }

  init() {
    document.documentElement.style.cursor = 'wait'
    document.body.style.pointerEvents = 'none'

    if (this.pli.length > 0) {
      this.imgLoad = imagesLoaded(document.querySelectorAll('[data-pli]'), {
        background: true,
      })

      this.imgLoad.on('progress', (_, image) => this.onProgress(image))
      this.imgLoad.on('fail', () => {
        setTimeout(() => {
          this.counter(100, 1)
        }, 650)
      })
    } else {
      this.counter(100, 1)
    }
  }

  afterLoad() {
    if (!this.state) {
      this.state = true

      document.documentElement.style.cursor = 'auto'
      document.body.style.pointerEvents = 'auto'

      setTimeout(() => {
        this.cb()
      }, 600)
    }
  }

  counter(c, d) {
    const count = c ?? Number(100 * (this.loadedLength / this.countImages))

    return new Promise(resolve => {
      gsap.to(this.num, {
        duration: d ?? 0.5,
        val: count,
        ease: 'power1.out',
        onUpdate: () => {
          const result = Math.round(this.num.val) + '%'
          this.percentHTML.innerHTML = result
          this.percentLine.style.width = result
        },
        onComplete: () => {
          if (count !== 100) {
            resolve()
          } else {
            this.afterLoad()
          }
        },
      })
    })
  }

  onProgress(image) {
    if (image.isLoaded) {
      image.element
        ? image.element.classList.add('loaded')
        : image.img.classList.add('loaded')

      this.loadedLength = document.querySelectorAll('[data-pli].loaded').length

      this.counter().then(() => {
        this.counter()
      })
    }
  }
}
