import { manageLocalStorage } from "./utils.js"

function getMessages() {
  const messages = manageLocalStorage("get")
  if (messages && messages.length > 0) {
    return messages
  }
  return []
}

async function saveMessage(messageText) {
  const messages = await getMessages()
  messages.unshift({ text: messageText })
  manageLocalStorage("set", messages)
}

async function editMessage(messageIndex, messageText) {
  const messages = await getMessages()
  if (messages[messageIndex]) {
    messages[messageIndex].text = messageText
    manageLocalStorage("set", messages)
  }
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

function updateMessageList(messages) {
  manageLocalStorage("set", messages)
}

export { getMessages, saveMessage, editMessage, deleteMessage, copyMessage, updateMessageList }