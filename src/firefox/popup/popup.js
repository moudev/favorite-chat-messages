import { getTabs, manageLocalStorage } from "../utils.js"
import { manageMessage, getMessages, saveMessage } from "../messages.js"

const MESSAGES_CONTAINER_CSS_ID = "#saved-messages"
export const DATA_TYPE_HTML_ATTRIBUTE = "data-type"
export const DATA_INDEX_HTML_ATTRIBUTE = "data-index"
export const DATA_TITLE_HTML_ATTRIBUTE = "data-title"
export const DATA_TEXT_HTML_ATTRIBUTE = "data-text"
const SAVE_BUTTON_CSS_ID = "save-button"
const MESSAGE_TITLE_INPUT_CSS_ID = "message-title"
const MESSAGE_TEXT_INPUT_CSS_ID = "message-text"

export async function createMessageList() {
  const messagesContainerNode = document.querySelector(MESSAGES_CONTAINER_CSS_ID)
  messagesContainerNode.innerHTML = ""

  const messages = await getMessages()

  // message box
  const messageContainer = document.createElement("div")
  messageContainer.className = "message"

  // texts
  const messageTitleNode = document.createElement("p")
  messageTitleNode.className = "message-title"

  const messageTextNode = document.createElement("span")
  messageTextNode.className = "message-text"

  // actions
  const messageActionsContainer = document.createElement("div")
  messageActionsContainer.className = "message-actions"

  const copyButtonNode = document.createElement("button")
  copyButtonNode.innerText = "Copy"
  copyButtonNode.className = "action-button"
  copyButtonNode.setAttribute(DATA_TYPE_HTML_ATTRIBUTE, "copy")

  const editButtonNode = document.createElement("button")
  editButtonNode.innerText = "Edit"
  editButtonNode.className = "action-button"
  editButtonNode.setAttribute(DATA_TYPE_HTML_ATTRIBUTE, "edit")

  const deleteButtonNode = document.createElement("button")
  deleteButtonNode.innerText = "Delete"
  deleteButtonNode.className = "action-button"
  deleteButtonNode.setAttribute(DATA_TYPE_HTML_ATTRIBUTE, "delete")

  const sendButtonNode = document.createElement("button")
  sendButtonNode.innerText = "Send"
  sendButtonNode.className = "action-button"
  sendButtonNode.setAttribute(DATA_TYPE_HTML_ATTRIBUTE, "send")

  messageActionsContainer.appendChild(copyButtonNode)
  messageActionsContainer.appendChild(editButtonNode)
  messageActionsContainer.appendChild(deleteButtonNode)
  messageActionsContainer.appendChild(sendButtonNode)

  // add messages
  if (messages.length === 0) {
    messagesContainerNode.innerHTML = "<strong>No saved messages</strong>"
  }

  messages.map((message, index)=> {
    const container = messageContainer.cloneNode(false)

    const title = message.title || "Default title"
    const text = message.text || "Default text"

    container.setAttribute(DATA_INDEX_HTML_ATTRIBUTE, index)
    container.setAttribute(DATA_TITLE_HTML_ATTRIBUTE, title)
    container.setAttribute(DATA_TEXT_HTML_ATTRIBUTE, text)

    messageTitleNode.innerText = title
    messageTextNode.innerText = text

    container.appendChild(messageTitleNode.cloneNode(true))
    container.appendChild(messageTextNode.cloneNode(true))
    container.appendChild(messageActionsContainer.cloneNode(true))

    messagesContainerNode.appendChild(container)
  })
}

async function saveMessageAndUpdateMessageList() {
  const messageTitle = document.getElementById(MESSAGE_TITLE_INPUT_CSS_ID).value
  const messageText = document.getElementById(MESSAGE_TEXT_INPUT_CSS_ID).value
console.log(messageText)
  await saveMessage(messageTitle, messageText)
  await createMessageList()
}

async function init() {
  const container = document.querySelector(MESSAGES_CONTAINER_CSS_ID)
  container.addEventListener("click", manageMessage)

  const saveButton = document.getElementById(SAVE_BUTTON_CSS_ID)
  saveButton.addEventListener("click", saveMessageAndUpdateMessageList)

  const tabs = await getTabs()

  // the active tab must be twitch.tv to display the saved messages
  if (tabs.length === 0) {
    // container.innerHTML = "No Twitch"
    // return
  }

  await createMessageList()
}

init()