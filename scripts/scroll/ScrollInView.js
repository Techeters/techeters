export default class ScrollInView {
  constructor(elements, callback, offset) {
    this.elements = elements || []
    this.callback = callback

    this.intersectionRatio = offset

    this.inView()
  }

  isInViewTop(elemTop) {
    return elemTop <= window.innerHeight * this.intersectionRatio && elemTop > 0
  }

  inView() {
    this.elements.forEach(elem => {
      const elemTop = elem.getBoundingClientRect().top

      if (this.isInViewTop(elemTop)) {
        if (!elem.classList.contains('activated')) {
          elem.classList.add('activated')
          this.callback(elem)
        }
      }
    })
  }
}
