import { Text } from "@base"
import { createElement } from "@utils/handleElement"

export default function Header({ targetEl, initialState }) {
  const headerEl = createElement({ elClassName: "header" })

  new Text({
    targetEl: headerEl,
    initialState: {
      elClassName: "logo",
      content: initialState.logo
    }
  })

  targetEl.append(headerEl)
}
