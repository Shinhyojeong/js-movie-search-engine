import { Button, Image, Input } from "@base"
import { CANCEL_ICON, SEARCH_ICON } from "@data/constant"
import { createElement } from "@utils/handleElement"

export default function SearchBar({
  targetEl,
  initialState,
  onSubmit,
  onFocus
}) {
  const searchBarEl = createElement({ elClassName: "search-bar" })

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  new Image({
    targetEl: searchBarEl,
    initialState: {
      imgUrl: SEARCH_ICON,
      imgAlt: "search-icon"
    }
  })

  const searchInput = new Input({
    targetEl: searchBarEl,
    initialState: {
      elClassName: "search-input",
      placeholder: "영화 제목을 입력해 주세요."
    },
    onChange: (e) => {
      const nextKeyword = e.target.value.trim()
      const { keyword } = this.state

      if (!nextKeyword) {
        cancelBtn.reset()
      } else {
        cancelBtn.setState({
          ...cancelBtn.state,
          elClassName: "search-clear visible"
        })
      }

      if (keyword === nextKeyword) {
        return
      }

      this.setState({
        ...this.state,
        keyword: nextKeyword
      })

      onSubmit(nextKeyword)
    }
  })

  const cancelBtn = new Button({
    targetEl: searchBarEl,
    initialState: {
      elClassName: "search-clear",
      content: `<img src=${CANCEL_ICON} alt="cancel-icon"/>`
    },
    onClick: () => {
      searchInput.reset()
      cancelBtn.reset()

      onSubmit("")
    }
  })

  targetEl.append(searchBarEl)

  const searchInputEl = document.querySelector(".search-input")

  searchInputEl.addEventListener("focus", (e) => {
    onFocus(true)
  })

  searchInputEl.addEventListener("blur", (e) => {
    onFocus(false)
  })

  searchInputEl.addEventListener("keydown", (e) => {
    if ([38, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }
  })
}
