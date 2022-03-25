import { Header, AutoComplete, SearchBar } from "@domain"
import { request } from "@api/api"

export default function App({ targetEl }) {
  this.state = {
    resultList: []
  }

  this.setState = (nextState) => {
    this.state = nextState
    autoComplete.setState({
      ...autoComplete.state,
      resultList: this.state.resultList
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
    onSubmit: async (value) => {
      const resultList = await request(`/autocomplete?value=${value}`)

      this.setState({
        ...this.state,
        resultList
      })
    }
  })

  const autoComplete = new AutoComplete({
    targetEl,
    initialState: {
      resultList: this.state.resultList
    }
  })
}
