export const debounce = (fn, delay) => {
  let timer = null

  return function () {
    const context = this
    const args = arguments

    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

export const stateChangeIsNecessary = (currentState, nextState) =>
  JSON.stringify(currentState) !== JSON.stringify(nextState)
