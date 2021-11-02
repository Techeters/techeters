import { Figure } from '@emotionagency/glhtml'
import gsap from 'gsap'

import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

export default class Waves extends Figure {
  constructor(scene, renderer, $el) {
    super(scene, renderer, $el)

    this.onClick = this.onClick.bind(this)
    document.body.addEventListener('click', this.onClick)
  }

  createGeometry() {
    super.createGeometry({ widthSegments: 1, heightSegments: 1 })
  }

  createMaterial() {
    const a = 0.5 / (2 / this.renderer.dpr)
    const uniforms = {
      uAlpha: { value: a },
      uIntensity: { value: 1 },
    }

    super.createMaterial({ uniforms, vertex, fragment })
  }

  onClick() {
    gsap.to(this.material.uniforms.uIntensity, { duration: 1, value: 0.2 })
  }

  get isInView() {
    const top = this.$el.parentElement.getBoundingClientRect().y
    return -top < window.innerHeight
  }

  resize() {
    if (!this.rendering) {
      return
    }
    this.setSizes()

    if (!this.isInView) {
      this.mesh.position.set(this.offset.x, this.offset.y, 0)
    } else {
      this.mesh.position.set(0, 0, 0)
    }

    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

    this.material.uniforms.size.value.x = this.getBoundingTexture.width
    this.material.uniforms.size.value.y = this.getBoundingTexture.height
  }

  createMesh() {
    super.createMesh()
  }

  destroy() {
    super.destroy()
  }
}
