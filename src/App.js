import { Header, AutoComplete, SearchBar } from "@domain"
import { request } from "@api/api"
import storage from "@utils/storage"
import { debounce } from "@utils/optimization"
import { STORAGE } from "@data/constant"
import "@style/searchPage.css"

export default function App({ targetEl }) {
  this.state = {
    autoCompleteList: [],
    autoCompleteVisible: false,
    keyword: null
  }

  this.cache = storage.getItem(STORAGE.AUTO_COMPLETE_LIST, {})

  this.setState = (nextState) => {
    this.state = nextState
    autoComplete.setState({
      ...autoComplete.state,
      autoCompleteList: this.state.autoCompleteList,
      autoCompleteVisible: this.state.autoCompleteVisible,
      selectedIdx: -1
    })
  }

  new Header({
    targetEl,
    initialState: {
      logo: "Movie Search Engine"
    }
  })

  new SearchBar({
    targetEl,
    initialState: {
      keyword: this.state.keyword
    },
    onSubmit: debounce(async (value) => {
      if (!value) {
        this.setState({
          ...this.state,
          autoCompleteList: [],
          autoCompleteVisible: false
        })

        return
      }

      const cachedAutoCompleteList = this.cache[value]

      let autoCompleteList = null

      if (cachedAutoCompleteList) {
        autoCompleteList = cachedAutoCompleteList
      } else {
        autoCompleteList = await request(`/autocomplete?value=${value}`)

        this.cache[value] = autoCompleteList
        storage.setItem(STORAGE.AUTO_COMPLETE_LIST, this.cache)
      }

      this.setState({
        ...this.state,
        autoCompleteList,
        autoCompleteVisible: autoCompleteList.length > 0
      })
    }, 200),
    onFocus: (visible) => {
      const { autoCompleteList } = this.state

      this.setState({
        ...this.state,
        autoCompleteVisible: visible && autoCompleteList.length > 0
      })
    }
  })

  const autoComplete = new AutoComplete({
    targetEl,
    initialState: {
      autoCompleteList: this.state.autoCompleteList,
      selectedIdx: -1,
      autoCompleteVisible: this.state.autoCompleteVisible
    }
  })
}
