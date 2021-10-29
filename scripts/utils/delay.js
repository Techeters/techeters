export const delayPromise = (time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
