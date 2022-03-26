import { createElement, applyClassName } from "@utils/handleElement"
import { stateChangeIsNecessary } from "@utils/optimization"

export default function Input({ targetEl, initialState, onChange }) {
  const inputEl = createElement({ elType: "input" })

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
    const { elClassName, placeholder, value } = this.state

    applyClassName(inputEl, elClassName)

    inputEl.placeholder = placeholder ?? ""
    inputEl.value = value ?? ""
  }

  this.render()
  targetEl.append(inputEl)

  inputEl.addEventListener("input", (e) => {
    onChange(e)
  })
}
