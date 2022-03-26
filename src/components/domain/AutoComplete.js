import { Text } from "@base"
import { createElement } from "@utils/handleElement"
import { stateChangeIsNecessary } from "@utils/optimization"

export default function AutoComplete({ targetEl, initialState }) {
  const autoCompleteEl = createElement({
    elType: "ul",
    elClassName: "auto-complete"
  })

  this.state = initialState

  this.setState = (nextState) => {
    if (!stateChangeIsNecessary(this.state, nextState)) {
      return
    }

    this.state = nextState
    this.render()
  }

  this.render = () => {
    autoCompleteEl.innerHTML = ``

    const { autoCompleteList, selectedIdx, autoCompleteVisible } = this.state

    autoCompleteEl.style.display = autoCompleteVisible ? "block" : "none"

    autoCompleteList?.forEach(({ text, id }, idx) => {
      new Text({
        targetEl: autoCompleteEl,
        initialState: {
          elType: "li",
          content: text,
          value: id,
          elClassName: idx === selectedIdx && "selected"
        }
      })
    })
  }

  targetEl.append(autoCompleteEl)

  window.addEventListener("keydown", (e) => {
    const { autoCompleteList, selectedIdx } = this.state
    const lastIdx = autoCompleteList.length - 1
    const { key } = e

    if (lastIdx < 0) {
      return
    }

    let nextIdx = selectedIdx

    switch (key) {
      case "ArrowDown":
        nextIdx = nextIdx + 1 > lastIdx ? 0 : (nextIdx += 1)
        break
      case "ArrowUp":
        nextIdx = nextIdx - 1 < 0 ? lastIdx : (nextIdx -= 1)
        break
    }

    this.setState({
      ...this.state,
      selectedIdx: nextIdx
    })
  })
}
