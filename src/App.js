import { Header, AutoComplete, SearchBar } from "@domain"
import { request } from "@api/api"
import { debounce } from "@utils/optimization"

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
    onSubmit: debounce(async (value) => {
      const resultList = await request(`/autocomplete?value=${value}`)

      this.setState({
        ...this.state,
        resultList
      })
    }, 200)
  })

  const autoComplete = new AutoComplete({
    targetEl,
    initialState: {
      resultList: this.state.resultList
    }
  })
}
