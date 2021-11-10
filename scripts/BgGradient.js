import { lerp, raf, resize } from '@emotionagency/utils'

const anim = {
  duration: 3000,
  interval: 10,
  stepUnit: 1.0,
  currUnit: 0.0,
}

export class Gradient {
  constructor() {
    this.colorStops = []
    this.currentStop = 0

    this.animate = this.animate.bind(this)
    this.resize = this.resize.bind(this)
    resize.on(this.resize)

    this.init()
  }

  init() {
    this.canvas = document.getElementById('gradient')
    this.ctx = this.canvas.getContext('2d')

    const stopAColor = [
      { r: '0', g: '49', b: '64' },
      { r: '0', g: '88', b: '124' },
    ]

    const stopBColor = [
      { r: '0', g: '88', b: '124' },
      { r: '0', g: '49', b: '64' },
    ]

    this.addStop(0, stopAColor)
    this.addStop(1, stopBColor)

    raf.on(this.animate)
  }

  addStop(pos, colors) {
    const stop = { pos, colors, currColor: null }
    this.colorStops.push(stop)
  }

  updateStops() {
    const steps = anim.duration / anim.interval
    const stepU = anim.stepUnit / steps
    const stopsLength = this.colorStops[0].colors.length - 1

    for (let i = 0; i < this.colorStops.length; i++) {
      const stop = this.colorStops[i]
      const startColor = stop.colors[this.currentStop]
      let endColor

      if (this.currentStop < stopsLength) {
        endColor = stop.colors[this.currentStop + 1]
      } else {
        endColor = stop.colors[0]
      }

      const r = Math.floor(lerp(startColor.r, endColor.r, anim.currUnit))
      const g = Math.floor(lerp(startColor.g, endColor.g, anim.currUnit))
      const b = Math.floor(lerp(startColor.b, endColor.b, anim.currUnit))

      stop.currColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    }

    if (anim.currUnit >= 1.0) {
      anim.currUnit = 0
      if (this.currentStop < stopsLength) {
        this.currentStop++
      } else {
        this.currentStop = 0
      }
    }

    anim.currUnit += stepU
  }

  draw() {
    const gradient = this.ctx.createLinearGradient(
      0,
      this.width,
      this.height,
      0
    )

    for (let i = 0; i < this.colorStops.length; i++) {
      const stop = this.colorStops[i]
      const pos = stop.pos
      const color = stop.currColor

      gradient.addColorStop(pos, color)
    }

    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  animate() {
    this.updateStops()
    this.draw()
  }
}
