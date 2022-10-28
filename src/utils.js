function manageLocalStorage(action = "get", data = null, key = "twitch-messages") {
  if (action === "get") {
    const result = localStorage.getItem(key)
    return JSON.parse(result ? result : "[]")
  } else if(action === "set") {  
    return localStorage.setItem(key, JSON.stringify(data))
  }
}

export { manageLocalStorage }
