export const createElement = ({ elType = "div", elClassName }) => {
  const el = document.createElement(elType)

  applyClassName(el, elClassName)

  return el
}

export const applyClassName = (el, elClassName) => {
  if (!elClassName) {
    return
  }

  el.removeAttribute("class")

  elClassName.split(" ").forEach((item) => {
    el.classList.add(item)
  })
}
