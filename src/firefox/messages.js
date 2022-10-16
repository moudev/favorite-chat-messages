import { manageLocalStorage } from "./utils.js"

async function getMessages() {
  const storageActions = await manageLocalStorage("get")  
  if (storageActions && storageActions.length > 0) {
    return storageActions
  }
  return []
}

async function saveMessage(messageTitle, messageText) {
  const messages = await getMessages()
  messages.unshift({ title: messageTitle, text: messageText })
  manageLocalStorage("set", messages)
}

async function editMessage(messageIndex, messageTitle, messageText) {
  const messages = await getMessages()
}

async function deleteMessage(messageIndex) {
  const messages = await getMessages()

  if (messages[messageIndex]) {
    messages.splice(messageIndex, 1)
    manageLocalStorage("set", messages)
  }
}

function copyMessage(messageText) {
  navigator.clipboard.writeText(messageText)
}

export { getMessages, saveMessage, editMessage, deleteMessage }