import { manageLocalStorage, onError, onExecuted } from "./utils.js"
import {
  DATA_TYPE_HTML_ATTRIBUTE,
  DATA_INDEX_HTML_ATTRIBUTE,
  DATA_TITLE_HTML_ATTRIBUTE,
  DATA_TEXT_HTML_ATTRIBUTE,
  createMessageList,
} from "./popup/popup.js"

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

async function sendMessage(messageText) {
  // based on: https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/background.js#L19
  // sendTwitchMessage() was loaded with twitch.js on plugin init
  const executeSendMessage = browser.tabs.executeScript({
    code: `sendTwitchMessage("${messageText}")`,
  });
  executeSendMessage.then(onExecuted, onError);
}

async function deleteMessage(messageIndex) {
  const messages = await getMessages()

  if (messages[messageIndex]) {
    messages.splice(messageIndex, 1)
    manageLocalStorage("set", messages)
    await createMessageList()
  }
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
      editMessage(messageIndex, messageTitle, messageText)
      break;
    case "send":
      sendMessage(messageText)
      break;
    case "delete":
      deleteMessage(messageIndex)
      break;
    case "copy":
      copyMessage(messageText)
      break;
    default:
      console.log("Option not available")
      break;
  }
}

export { getMessages, manageMessage, saveMessage }