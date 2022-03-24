import { createElement, applyClassName } from "@utils/handleElement"

export default function Image({ targetEl, initialState }) {
  const imageEl = createElement({ elType: "img" })

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, imgUrl, imgAlt } = this.state

    applyClassName(imageEl, elClassName)

    imageEl.src = imgUrl
    imageEl.alt = imgAlt
  }

  this.render()
  targetEl.append(imageEl)
}
