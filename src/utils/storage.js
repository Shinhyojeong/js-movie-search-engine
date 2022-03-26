const storage = window.sessionStorage

const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key)

    if (storedValue) {
      return JSON.parse(storedValue)
    }

    return defaultValue
  } catch (e) {
    console.log("storage에서 데이터를 불러오는데 실패했습니다.")
  }
}

const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value))
}

export default {
  getItem,
  setItem
}
