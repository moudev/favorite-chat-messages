import React, { useState } from 'react'
import { Button, Input, IconButton } from 'rsuite'
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine'
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine'
import DragableIcon from '@rsuite/icons/Dragable'

import { sendTwitchMessage } from '../twitch.js'
import { copyMessage } from '../messages.js'
import { addRandomTextAtTheEnd } from '../utils.js'

const MessageItem = ({
  message,
  toggleWhisper,
  index,
  convertedMessageToJSX,
  closeMenuAfterSendMessage,
  moveMessage,
  removeMessage,
  updateMessage,
  avoidUniqueChat,
  labels,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false)
  const [localMessageText, setLocalMessageText] = useState(message)

  const sendMessage = (text) => {
    let msg = text
    if (avoidUniqueChat) {
      msg = addRandomTextAtTheEnd(msg)
    }

    sendTwitchMessage(msg)

    if (closeMenuAfterSendMessage) {
      toggleWhisper()
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid #3c3f43',
        borderRadius: '6px',
        gap: '1rem',
        padding: '1rem',
      }}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          gap: '0.5rem',
          justifyContent: 'center',
        }}
      >
        <IconButton
          size="sm"
          icon={<ArrowUpLineIcon />}
          onClick={() => moveMessage(index, -1)}
        />
        <div style={{ cursor: 'pointer' }}>
          <IconButton
            size="sm"
            icon={<DragableIcon />}
            style={{ zIndex: '-1', width: '100%' }}
          />
        </div>

        <IconButton
          size="sm"
          icon={<ArrowDownLineIcon />}
          onClick={() => moveMessage(index, 1)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          flex: '3',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {editMode ? (
            <Input
              as="textarea"
              rows={4}
              placeholder="Message"
              onChange={(e) => setLocalMessageText(e)}
              value={localMessageText}
            />
          ) : (
            <p style={{ wordBreak: 'break-all' }}>
              {message ? convertedMessageToJSX : 'Error'}
            </p>
          )}
        </div>
        <div
          style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}
        >
          <Button
            size="xs"
            onClick={
              editMode
                ? () => updateMessage(index, localMessageText)
                : () => setEditMode(true)
            }
          >
            {editMode ? labels.saveButton : labels.editButton}
          </Button>
          <Button
            disabled={editMode}
            size="xs"
            onClick={() => removeMessage(index)}
          >
            {labels.deleteButton}
          </Button>
          <Button size="xs" onClick={() => copyMessage(message)}>
            {labels.copyButton}
          </Button>
        </div>
      </div>
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Button
          size="sm"
          disabled={editMode}
          onClick={() => sendMessage(message)}
        >
          {labels.sendButton}
        </Button>
      </div>
    </div>
  )
}

export { MessageItem }
