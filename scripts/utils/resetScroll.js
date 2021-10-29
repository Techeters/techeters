export const resetScroll = () => {
  // window.ss?.reset()
  if (window.ss) {
    try {
      window.ss.reset()
    } catch (e) {
      console.log(e)
    }
  }
  window.ss && (window.ss.isFixed = false)
  setTimeout(() => {
    window.parallax && window.parallax.update()
  }, 0)
}
