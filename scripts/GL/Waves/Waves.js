import { Figure } from '@emotionagency/glhtml'
import emitter from 'tiny-emitter/instance'
import gsap from 'gsap'

import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

export default class Waves extends Figure {
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

  // update() {
  //   const top = this.$el.parentElement.getBoundingClientRect().y

  //   if (-top > window.innerHeight) {
  //     this.rendering = false
  //     this.destroy()
  //   } else {
  //     this.rendering = true
  //   }

  //   super.update()
  // }

  resize() {
    if (!this.rendering) {
      return
    }
    this.setSizes()
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

    this.material.uniforms.size.value.x = this.getBoundingTexture.width
    this.material.uniforms.size.value.y = this.getBoundingTexture.height
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
