import React from "react"
import ReactDOM from "react-dom"

const CHAT_SETTINGS_BUTTON_CONTAINER_SELECTOR = '.chat-input div[data-test-selector="chat-input-buttons-container"]'

const Button = () => {
  return <button>Button</button>
}

class PickerButton {
  constructor() {
    this.config()
  }

  config() {
    const container = document.querySelector(CHAT_SETTINGS_BUTTON_CONTAINER_SELECTOR)
    console.log("container", container)
  
    if (container == null) {
      return;
    }
  
    const rightContainer = container.lastChild;
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('data-a-target', 'one-click-twitch-message-picker-button-container')
    rightContainer.insertBefore(buttonContainer, rightContainer.lastChild);
  
    ReactDOM.render(<Button />, buttonContainer)  
  }
}

export { PickerButton }

