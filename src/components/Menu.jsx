import React from 'react'
import ReactDOM from 'react-dom'
import 'rsuite/styles/index.less'

import { PickerButton } from './PickerButton.jsx'
import domObserver from '../dom-observer.js'

const CHAT_SETTINGS_BUTTON_CONTAINER_SELECTOR =
  '.chat-input div[data-test-selector="chat-input-buttons-container"]'

class Menu {
  constructor() {
    domObserver.on(
      CHAT_SETTINGS_BUTTON_CONTAINER_SELECTOR,
      (node, isConnected) => {
        if (!isConnected) {
          return
        }

        this.load()
      }
    )
  }

  load() {
    const container = document.querySelector(
      CHAT_SETTINGS_BUTTON_CONTAINER_SELECTOR
    )

    if (container == null) {
      return
    }

    const rightContainer = container.lastChild
    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute(
      'data-a-target',
      'favorite-chat-messages-picker-button-container'
    )
    rightContainer.insertBefore(buttonContainer, rightContainer.lastChild)

    ReactDOM.render(<PickerButton />, buttonContainer)
  }
}

export { Menu }
