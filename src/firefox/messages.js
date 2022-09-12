import { manageLocalStorage } from "./utils.js"
import {
  DATA_TYPE_HTML_ATTRIBUTE,
  DATA_INDEX_HTML_ATTRIBUTE,
  DATA_TITLE_HTML_ATTRIBUTE,
  DATA_TEXT_HTML_ATTRIBUTE
} from "./popup/popup.js"

async function getMessages() {
  const storageActions = await manageLocalStorage("get")  
  if (storageActions && storageActions.length > 0) {
    return storageActions
  }
  return []
}

async function editMessage(messageIndex, messageTitle, messageText) {
  const messages = await getMessages()
}

async function sendMessage(messageText) {}

async function deleteMessage(messageIndex) {
  const messages = await getMessages()
}

function copyMessage(messageText) {
  navigator.clipboard.writeText(messageText)
}

async function manageMessage(e) {
  if (
    !(e.target.tagName.toLowerCase() === "button") ||
    !(e.target.getAttribute(DATA_TYPE_HTML_ATTRIBUTE)) // added in create message list
  ) {
    return
  }

  const messageIndex = e.target.parentNode.parentNode.getAttribute(DATA_INDEX_HTML_ATTRIBUTE) || -1
  const messageTitle = e.target.parentNode.parentNode.getAttribute(DATA_TITLE_HTML_ATTRIBUTE) || ""
  const messageText = e.target.parentNode.parentNode.getAttribute(DATA_TEXT_HTML_ATTRIBUTE) || ""
  
  const typeAction = e.target.getAttribute(DATA_TYPE_HTML_ATTRIBUTE)

  switch (typeAction.toLowerCase()) {
    case "edit":
      console.log("update action")
      editMessage(messageIndex, messageTitle, messageText)
      break;
    case "send":
      console.log("send action")
      sendMessage(messageText)
      break;
    case "delete":
      console.log("delete action")
      deleteMessage(messageIndex)
      break;
    case "copy":
      console.log("copy action")
      copyMessage(messageText)
      break;
    default:
      console.log("Option not available")
      break;
  }
}

export { getMessages, manageMessage }