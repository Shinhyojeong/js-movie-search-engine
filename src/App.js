import { Text } from "@base"

export default function App({ targetEl }) {
  new Text({
    targetEl,
    initialState: {
      content: "Test"
    }
  })
}
