import { API } from "@data/constant"

export const request = async (url = "") => {
  try {
    const res = await fetch(`${API.END_POINT}${url}`)

    if (res.ok) {
      return res.json()
    }

    throw new Error("api 호출에 실패했습니다.")
  } catch (e) {
    console.log(e)
  }
}
