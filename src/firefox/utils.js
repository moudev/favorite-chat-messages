import defaultActions from "./data.js"

function manageLocalStorage(action = "get", data = null, key = "actions") {
  if (action === "get") {
    return browser.storage.local.get(key).then((res) => {
        const keys = Object.keys(res)
        return Promise.resolve(res[keys[0]])
      })
  } else if(action === "set") {  
    return browser.storage.local.set({ [key]: data })
  }
}

async function getActions() {
  const storageActions = await manageLocalStorage("get")  
  if (storageActions && storageActions.length > 0) {
    return storageActions
  }
  return defaultActions
}

function getTabs() {
  return browser.tabs.query({
    active: true,
    url: "*://*.twitch.tv/*"
  })
}

async function updateAction(e) {
  if (e.target.type !== "checkbox") return

  const actions = await getActions()  

  const checked = e.target.checked
  const [action, rule] = e.target.id.split("-")

  const actionIndex = actions.findIndex(a => a.id === action)
  const ruleIndex = actions[actionIndex].rules.findIndex(r => r.id === rule)

  actions[actionIndex].rules[ruleIndex].apply = checked

  await manageLocalStorage("set", actions)  

}

export { updateAction, getTabs, getActions }
