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

function getTabs() {
  return browser.tabs.query({
    active: true,
    url: "*://*.twitch.tv/*"
  })
}

function onExecuted(result) {
  console.log('Success', result);
}

function onError(error) {
  console.log('Error:', error);
}

export { getTabs, manageLocalStorage, onExecuted, onError }
