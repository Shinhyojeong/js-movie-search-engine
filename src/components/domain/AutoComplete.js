import { Text } from "@base"
import { createElement } from "@utils/handleElement"

export default function AutoComplete({ targetEl, initialState }) {
  const autoCompleteEl = createElement({
    elType: "ul",
    elClassName: "auto-complete"
  })

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    autoCompleteEl.innerHTML = ``

    const { resultList } = this.state

    resultList?.forEach(({ text, id }) => {
      new Text({
        targetEl: autoCompleteEl,
        initialState: {
          elType: "li",
          content: text,
          value: id
        }
      })
    })
  }

  targetEl.append(autoCompleteEl)
}
