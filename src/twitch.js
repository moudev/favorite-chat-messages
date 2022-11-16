 // copy of: https://github.com/night/betterttv/blob/7.4.36/src/utils/twitch.js
const querySelector = (selector) => document.querySelector(selector)

const CHAT_INPUT_OPTIONS = [
  'textarea[data-a-target="chat-input"]',
  'div[data-a-target="chat-input"'
]

const CHAT_CONTAINER = 'section[data-test-selector="chat-room-component-layout"]'

// NOTE: only works when the input is a textarea. It works in firefox developer edition
// It doesn't work because cannot find the react instance in the element.
// It appears on the console but not when trying to access with the key.
function getReactInstance(element) {
  for (const key in element) {
    if (key.startsWith('__reactInternalInstance$')) {
      return element[key];
    }
  }

  return null;
}

function getCurrentChat() {
  let currentChat;
  try {
    const node = searchReactParents(
      getReactInstance(querySelector(CHAT_CONTAINER)),
      (n) => n.stateNode && n.stateNode.props && n.stateNode.props.onSendMessage
    );
    currentChat = node.stateNode;
  } catch (_) {}

  return currentChat;
}

function  getChatInputEditor(element = null) {
  let chatInputEditor;
  try {
    chatInputEditor = searchReactParents(
      getReactInstance(element || querySelector(CHAT_INPUT_OPTIONS[0]) || querySelector(CHAT_INPUT_OPTIONS[1])),
      (n) => n.stateNode?.state?.slateEditor != null
    );
  } catch (_) {}

  return chatInputEditor?.stateNode;
}

function getCurrentTwitchEmotes() {
  let currentEmotes;
  let emotes = {};

  if (currentEmotes != null) {
    return currentEmotes;
  }

  try {
    const node = searchReactParents(
      getReactInstance(querySelector(CHAT_CONTAINER)),
      (n) => n.stateNode?.props?.emoteSetsData?.emoteMap,
      25
    );

    currentEmotes = node.stateNode.props.emoteSetsData.emoteMap ?
      node.stateNode.props.emoteSetsData.emoteMap :
      {};

    Object.keys(currentEmotes).forEach((key) => {
      const emote = currentEmotes[key]

      emotes[emote.token] = {
        id: emote.id,
        provider: "twitch",
        code: emote.token,
        type: emote.type,
        url: `https://static-cdn.jtvnw.net/emoticons/v2/${emote.id}/default/dark/1.0`
      }
    })
  } catch (_) {}

  return emotes
}

function searchReactParents(node, predicate, maxDepth = 15, depth = 0) {
  try {
    if (predicate(node)) {
      return node;
    }
  } catch (_) {}

  if (!node || depth > maxDepth) {
    return null;
  }

  const {return: parent} = node;
  if (parent) {
    return searchReactParents(parent, predicate, maxDepth, depth + 1);
  }

  return null;
}

function getChatInput(element = null) {
  let chatInput;
  try {
    chatInput = searchReactParents(
      getReactInstance(element || querySelector(CHAT_INPUT_OPTIONS[0]) || querySelector(CHAT_INPUT_OPTIONS[1])),
      (n) => n.memoizedProps && n.memoizedProps.componentType != null && n.memoizedProps.value != null
    );
  } catch (_) {}

  return chatInput;
}

const getCurrentChannelInformation = () => {
  const currentChat = getCurrentChat()
  const props = currentChat.props

  return {
    channelID: props.channelID,
    channelDisplayName: props.channelDisplayName,
    channelLogin: props.channelLogin,
    currentUserID: props.userID,
    currentUserDisplayName: props.currentUserDisplayName,
    currentUserLogin: props.currentUserLogin,
  }
}

const sendTwitchMessage = (message = "") => {
  const currentChat = getCurrentChat()
  if (!currentChat) return;
  currentChat.props.onSendMessage(message)
}

export { sendTwitchMessage, getCurrentTwitchEmotes, getCurrentChannelInformation }