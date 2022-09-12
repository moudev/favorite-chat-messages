import { updateMessage, getTabs, getMessages } from "../utils.js"

async function createMessageList() {
  const messagesContainerNode = document.querySelector("#saved-messages")

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
  copyButtonNode.className = "copy-button"

  const editButtonNode = document.createElement("button")
  editButtonNode.innerText = "Edit"
  editButtonNode.className = "edit-button"

  const deleteButtonNode = document.createElement("button")
  deleteButtonNode.innerText = "Delete"
  deleteButtonNode.className = "delete-button"

  const sendButtonNode = document.createElement("button")
  sendButtonNode.innerText = "Send"
  sendButtonNode.className = "send-button"  

  messageActionsContainer.appendChild(copyButtonNode)
  messageActionsContainer.appendChild(editButtonNode)
  messageActionsContainer.appendChild(deleteButtonNode)
  messageActionsContainer.appendChild(sendButtonNode)

  // add messages
  const tmpData = [
    {title: "title", message: "mesage"},
    {title: "title", message: "mesage"},
    {title: "title", message: "mesage"},
    {title: "title", message: "mesage"},
    {title: "title", message: "mesage"},
    {title: "title", message: "mesage"}
  ]

  tmpData.map((message)=> {
    const container = messageContainer.cloneNode(false)

    messageTitleNode.innerText = message.title || "Title"
    messageTextNode.innerText = message.message || "LUL"

    container.appendChild(messageTitleNode.cloneNode(true))
    container.appendChild(messageTextNode.cloneNode(true))
    container.appendChild(messageActionsContainer.cloneNode(true))

    messagesContainerNode.appendChild(container)
  })
}

async function init() {
  const container = document.querySelector("#container")

  const tabs = await getTabs()

  // the active tab must be twitch.tv to display the saved messages
  if (tabs.length === 0) {
    // container.innerHTML = "No Twitch"
    // return
  }

  await createMessageList()
}

init()