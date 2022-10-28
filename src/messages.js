import { manageLocalStorage } from "./utils.js"

function getMessages() {
  const messages = manageLocalStorage("get")
  if (messages && messages.length > 0) {
    return messages
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