import { Header, AutoComplete, SearchBar } from "@domain"
import { request } from "@api/api"

export default function App({ targetEl }) {
  this.state = {
    resultList: []
  }

  this.setState = (nextState) => {
    this.state = nextState
  }

  new Header({
    targetEl,
    initialState: {
      logo: "Movie Search Engine"
    }
  })

  new SearchBar({
    targetEl,
    onSubmit: async (value) => {}
  })

  new AutoComplete({
    targetEl,
    initialState: {
      resultList: this.state.resultList
    }
  })
}
