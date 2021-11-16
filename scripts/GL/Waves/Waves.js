import { Figure, Vec2 } from '@emotionagency/glhtml'
import gsap from 'gsap'

import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

export default class Waves extends Figure {
  mouse = {
    destX: 0,
    destY: 0,
  }

  constructor(scene, renderer, $el) {
    super(scene, renderer, $el)

    this.onClick = this.onClick.bind(this)
    this.onMousemove = this.onMousemove.bind(this)

    window.addEventListener('mousemove', this.onMousemove)
  }

  createGeometry() {
    super.createGeometry({ widthSegments: 1, heightSegments: 1 })
  }

  createMaterial() {
    const uniforms = {
      uAlpha: { value: 0 },
      uIntensity: { value: 7 },
      uMouse: { type: 'v2', value: new Vec2(0, 0) },
    }

    super.createMaterial({ uniforms, vertex, fragment })
  }

  onClick() {
    this.changeIntensity()
  }

  changeIntensity(value) {
    gsap.to(this.material.uniforms.uIntensity, {
      duration: 2.5,
      value: value ?? 1,
      ease: 'power2.inOut',
    })
    gsap.to(this.material.uniforms.uAlpha, {
      duration: 2.5,
      value: 1,
      ease: 'power2.out',
    })
  }

  get isInView() {
    const { y, height } = this.$el.parentElement.getBoundingClientRect()
    return -y < height
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

  onMousemove(e) {
    const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
    const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
    this.mouse.destX = x
    this.mouse.destY = -y
  }

  update() {
    super.update()
    if (this.material) {
      const mouse = this.material.uniforms.uMouse.value

      mouse.x += this.mouse.destX - mouse.x * 0.03
      mouse.y += this.mouse.destY - mouse.y * 0.03
    }
  }

  createMesh() {
    super.createMesh()
  }

  destroy() {
    window.removeEventListener('mousemove', this.onMousemove)

    super.destroy()
  }
}
