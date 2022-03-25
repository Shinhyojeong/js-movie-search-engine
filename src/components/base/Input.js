import { createElement, applyClassName } from "@utils/handleElement"

export default function Input({ targetEl, initialState, onChange }) {
  const inputEl = createElement({ elType: "input" })

  this.state = initialState

  this.setState = (nextState) => {
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
