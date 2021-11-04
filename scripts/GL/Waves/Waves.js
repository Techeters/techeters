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
    const uniforms = {
      uAlpha: { value: 0 },
      uIntensity: { value: 5 },
    }

    super.createMaterial({ uniforms, vertex, fragment })
  }

  onClick() {
    this.changeIntensity()
  }

  changeIntensity() {
    gsap.to(this.material.uniforms.uIntensity, {
      duration: 2.5,
      value: 1,
      ease: 'power2.inOut',
    })
    gsap.to(this.material.uniforms.uAlpha, {
      duration: 2.5,
      value: 1,
      ease: 'power2.out',
    })
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
