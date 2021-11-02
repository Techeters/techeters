import Images from '@/scripts/GL/Images/Images'

export const initImages = () => {
  const imgs = [...document.querySelectorAll('[data-gl]:not([data-gl-id])')]
  const nodes = imgs.map(img => ({
    $el: img,
    Figure: Images,
  }))
  window.scetch.addFigures(nodes)
}
