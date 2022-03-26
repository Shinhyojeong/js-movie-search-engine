import { createElement, applyClassName } from "@utils/handleElement"
import { stateChangeIsNecessary } from "@utils/optimization"

export default function Image({ targetEl, initialState }) {
  const imageEl = createElement({ elType: "img" })

  this.state = initialState

  this.setState = (nextState) => {
    if (!stateChangeIsNecessary(this.state, nextState)) {
      return
    }

    this.state = nextState
    this.render()
  }

  this.reset = () => {
    this.setState(initialState)
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
