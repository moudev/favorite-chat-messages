import { updateAction, getTabs, getActions } from "../utils.js"

async function createMessages() {
  const container = document.querySelector("#container")

  const actions = await getActions()

  actions.map(action => {
    const ruleContainer = document.createElement("div")
    
    const title = document.createElement("h3")  
    title.textContent = action.screenName
    
    ruleContainer.appendChild(title)

    const inputsContainer = document.createElement("div")
    inputsContainer.classList.add("inputs-container")

    action.rules.map((rule) => {
      const ruleNode = document.createElement("p")
      ruleNode.textContent = rule.screenName

      const check = document.createElement("input")
      check.setAttribute("type", "checkbox")
      check.checked = rule.apply

      const idAttribute = `${action.id}-${rule.id}`
      check.setAttribute("id", idAttribute)

      const label = document.createElement("label")
      label.textContent = rule.screenName
      label.setAttribute("for", idAttribute)

      inputsContainer.appendChild(check)
      inputsContainer.appendChild(label)
    })

    ruleContainer.appendChild(inputsContainer)
    container.appendChild(ruleContainer)
  })
}

async function init() {
  const container = document.querySelector("#container")

  const tabs = await getTabs()

  // the active tab must be twitch.tv to display the saved messages
  if (tabs.length === 0) {
    container.innerHTML = "No Twitch"
    return
  }
  
  await createMessages()
}

init()