import { Text } from "@base"
import { createElement } from "@utils/handleElement"

export default function SearchResult({ targetEl, initialState }) {
  const searchResultEl = createElement({
    elType: "ul",
    elClassName: "search-result"
  })

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchResultEl.innerHTML = ``

    const { resultList } = this.state

    resultList?.forEach(({ text, id }) => {
      new Text({
        targetEl: searchResultEl,
        initialState: {
          elType: "li",
          content: text,
          value: id
        }
      })
    })
  }

  targetEl.append(searchResultEl)
}
