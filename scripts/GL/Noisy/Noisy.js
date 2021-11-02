import { Figure } from '@emotionagency/glhtml'
import emitter from 'tiny-emitter/instance'
import gsap from 'gsap'

import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

export default class Noisy extends Figure {
  constructor(scene, renderer, $el) {
    super(scene, renderer, $el)

    this.animateAlpha = this.animateAlpha.bind(this)

    emitter.on('changeTheme', this.animateAlpha)
  }

  createGeometry() {
    super.createGeometry({ widthSegments: 1, heightSegments: 1 })
  }

  createMaterial() {
    const a = 0.5 / (2 / this.renderer.dpr)
    const uniforms = {
      uAlpha: { value: a },
    }

    super.createMaterial({ uniforms, vertex, fragment })
  }

  animateAlpha(value) {
    let to = value === 1 ? 0.1 : 0.5
    to = to / (2 / this.renderer.dpr)

    gsap.to(this.material.uniforms.uAlpha, {
      duration: 1,
      value: to,
      overwrite: true,
    })
  }

  createMesh() {
    super.createMesh()
  }

  destroy() {
    super.destroy()
  }
}
