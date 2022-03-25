import { Button, Image, Input } from "@base"
import { CANCEL_ICON, SEARCH_ICON } from "@data/constant"
import { createElement } from "@utils/handleElement"

export default function SearchBar({ targetEl, onSubmit }) {
  const searchBarEl = createElement({ elClassName: "search-bar" })

  const searchInput = new Input({
    targetEl: searchBarEl,
    initialState: {
      elClassName: "search-input",
      placeholder: "영화 제목을 입력해 주세요."
    },
    onChange: (e) => {
      const { value } = e.target

      if (!value) {
        cancelBtn.reset()

        return
      }

      cancelBtn.setState({
        ...cancelBtn.state,
        elClassName: "search-clear visible"
      })

      onSubmit(value)
    }
  })

  new Image({
    targetEl: searchBarEl,
    initialState: {
      imgUrl: SEARCH_ICON,
      imgAlt: "search-icon"
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
    }
  })

  targetEl.append(searchBarEl)
}