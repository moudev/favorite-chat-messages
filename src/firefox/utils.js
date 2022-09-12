function manageLocalStorage(action = "get", data = null, key = "twitch-messages") {
  if (action === "get") {
    return browser.storage.local.get(key).then((res) => {
        const keys = Object.keys(res)
        return Promise.resolve(res[keys[0]])
      })
  } else if(action === "set") {  
    return browser.storage.local.set({ [key]: data })
  }
}

async function getMessages() {
  const storageActions = await manageLocalStorage("get")  
  if (storageActions && storageActions.length > 0) {
    return storageActions
  }
  return []
}

function getTabs() {
  return browser.tabs.query({
    active: true,
    url: "*://*.twitch.tv/*"
  })
}

async function updateMessage(index, title, message) {
  const messages = await getMessages()  
  messages[index].title = title
  messages[index].message = message

  await manageLocalStorage("set", messages)
}

export { updateMessage, getTabs, getMessages }
