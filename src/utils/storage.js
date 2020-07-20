export const local = {
  getItem (key) {
    let value = localStorage.getItem(key)
    if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
    return value
  },
  setItem (key, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return localStorage.setItem(key, value)
  },
  removeItem (key) {
    return localStorage.removeItem(key)
  }
}

export const session = {
  getItem (key) {
    let value = sessionStorage.getItem(key)
    if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
    return value
  },
  setItem (key, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return sessionStorage.setItem(key, value)
  },
  removeItem (key) {
    return sessionStorage.removeItem(key)
  }
}
