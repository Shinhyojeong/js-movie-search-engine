const API_END_POINT =
  "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front"

export const request = async (url = "") => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`)

    if (res.ok) {
      return res.json()
    }

    throw new Error("api 호출에 실패했습니다.")
  } catch (e) {
    console.log(e)
  }
}
