 // copy of: https://github.com/night/betterttv/blob/7.4.36/src/utils/twitch.js
const TWITCH_SEND_BUTTON_CSS_SELECTOR = 'button[data-a-target="chat-send-button"]'

const CHAT_INPUT_NODE_OPTIONS = [
  document.querySelector('textarea[data-a-target="chat-input"]'),
  document.querySelector('div[data-a-target="chat-input"')
]

const CHAT_CONTAINER = document.querySelector('section[data-test-selector="chat-room-component-layout"]')

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

export function getCurrentChat() {
  let currentChat;
  try {
    const node = searchReactParents(
      getReactInstance(CHAT_CONTAINER),
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
      getReactInstance(element || CHAT_INPUT_NODE_OPTIONS[0] || CHAT_INPUT_NODE_OPTIONS[1]),
      (n) => n.stateNode?.state?.slateEditor != null
    );
  } catch (_) {}

  return chatInputEditor?.stateNode;
}

function searchReactParents(node, predicate, maxDepth = 15, depth = 0) {
  try {
    console.log("searchReactParents", node )
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
      getReactInstance(element || CHAT_INPUT_NODE_OPTIONS[0] || CHAT_INPUT_NODE_OPTIONS[1]),
      (n) => n.memoizedProps && n.memoizedProps.componentType != null && n.memoizedProps.value != null
    );
  } catch (_) {}

  return chatInput;
}

function setChatInputValue(text, shouldFocus = true) {
  const element = CHAT_INPUT_NODE_OPTIONS[0] ? CHAT_INPUT_NODE_OPTIONS[0] : CHAT_INPUT_NODE_OPTIONS[1]

  // deprecated
  const {value: currentValue, selectionStart} = element;
  if (currentValue != null) {
    element.value = text;
    element.dispatchEvent(new Event('input', {bubbles: true}));

    const instance = getReactInstance(element);
    if (instance) {
      const props = instance.memoizedProps;
      if (props && props.onChange) {
        props.onChange({target: element});
      }
    }

    const selectionEnd = selectionStart + text.length;
    element.setSelectionRange(selectionEnd, selectionEnd);

    if (shouldFocus) {
      element.focus();
    }

    return;
  }

  const chatInput = this.getChatInput(element);
  if (chatInput == null) {
    return;
  }

  chatInput.memoizedProps.value = text;
  chatInput.memoizedProps.setInputValue(text);
  chatInput.memoizedProps.onValueUpdate(text);

  if (shouldFocus) {
    const chatInputEditor = this.getChatInputEditor(element);
    if (chatInputEditor != null) {
      chatInputEditor.focus();
      chatInputEditor.setSelectionRange(text.length);
    }
  }
}

// this function is called from messages.js using inject script
function sendTwitchMessage (messageText) {
  setChatInputValue(messageText)
}
