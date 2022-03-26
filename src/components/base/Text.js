import { applyClassName, createElement } from "@utils/handleElement"
import { stateChangeIsNecessary } from "@utils/optimization"

export default function Text({ targetEl, initialState }) {
  const textEl = createElement({ elType: initialState.elType })

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
    const { elClassName, content, value } = this.state

    applyClassName(textEl, elClassName)
    textEl.innerHTML = `${content ?? ""}`

    if (!value) {
      return
    }

    textEl.dataset.id = value
  }

  this.render()
  targetEl.append(textEl)
}
