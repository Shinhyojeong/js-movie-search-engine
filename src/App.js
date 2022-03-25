import { Header, AutoComplete, SearchBar } from "@domain"
import { request } from "@api/api"
import storage from "@utils/storage"
import { debounce } from "@utils/optimization"
import { STORAGE } from "@data/constant"

export default function App({ targetEl }) {
  this.state = {
    autoCompleteList: []
  }

  this.cache = storage.getItem(STORAGE.AUTO_COMPLETE_LIST, {})

  this.setState = (nextState) => {
    this.state = nextState
    autoComplete.setState({
      ...autoComplete.state,
      autoCompleteList: this.state.autoCompleteList
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
    onSubmit: debounce(async (value) => {
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
        autoCompleteList
      })
    }, 200)
  })

  const autoComplete = new AutoComplete({
    targetEl,
    initialState: {
      autoCompleteList: this.state.autoCompleteList
    }
  })
}
