import React, { useState, useEffect } from 'react'
import { Loader } from 'rsuite'
import parse from 'html-react-parser'

import { MessageItem } from '../MessageItem.jsx'
import {
  getMessages,
  updateMessageList,
  editMessage,
  deleteMessage,
} from '../../messages.js'
import { renderEmoji } from '../../utils.js'

const PopoverMenuBody = ({
  toggleWhisper,
  emotes,
  loadingEmotes,
  closeMenuAfterSendMessage,
  avoidUniqueChat,
  messages,
  setMessages,
  labels,
}) => {
  const [position, setPosition] = useState({ start: 0, end: 0 })

  useEffect(() => {
    setMessages(getMessages())
  }, [])

  const transformMessage = (message) => {
    const chunks = message.split(/\s|\n/gm)
    const transformedRawTextChunks = chunks.map((chunk) => {
      const emote = emotes[chunk.trim()]
      if (emote) {
        if (emote.provider === 'emoji-toolkit') {
          return renderEmoji(emote.url)
        }
        return `<img alt='${emote.code}' src='${emote.url}'  />`
      }
      return chunk
    })
    const rawText = transformedRawTextChunks.join(' ')
    return rawText
  }

  const handleDragStart = (e) => {
    setPosition({ ...position, start: e })
  }

  const handleDragEnter = (e) => {
    setPosition({ ...position, end: e })
  }

  const handleDragEnd = (e) => {
    const tmpMessages = messages
    const taskToAdd = tmpMessages.splice(position.start, 1)[0]
    tmpMessages.splice(position.end, 0, taskToAdd)
    setMessages(tmpMessages)
    setPosition({ start: 0, end: 0 })
    updateMessageList(messages)
  }

  const moveMessage = (actualPosition, positions) => {
    const lastItemIndex = messages.length - 1
    if (
      (actualPosition === 0 && positions <= -1) ||
      (actualPosition === lastItemIndex && positions >= 1)
    ) {
      return
    }

    const tmpMessages = messages
    const taskToAdd = tmpMessages.splice(actualPosition, 1)[0]
    tmpMessages.splice(actualPosition + positions, 0, taskToAdd)
    setMessages([...tmpMessages]) // was not updated for the splice behavior
    updateMessageList(messages)
  }

  const removeMessage = (index) => {
    const tmpMessages = messages
    tmpMessages.splice(index, 1)
    setMessages([...tmpMessages]) // was not updated for the splice behavior
    deleteMessage(index)
  }

  const updateMessage = (index, text) => {
    const tmpMessages = messages
    tmpMessages[index].text = text
    setMessages([...messages]) // was not updated for the splice behavior
    editMessage(index, text)
  }

  return (
    <div
      style={{
        height: '350px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        scrollbarWidth: 'thin',
      }}
    >
      {loadingEmotes && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
            padding: '3rem',
          }}
        >
          <Loader size="md" content="loading..." vertical />
        </div>
      )}

      {(!messages || messages.length === 0) && <p>No saved messages</p>}

      {!loadingEmotes &&
        messages.map((message, index) => (
          <MessageItem
            message={message.text}
            key={`${message.text}-${index}`}
            toggleWhisper={toggleWhisper}
            index={index}
            convertedMessageToJSX={parse(transformMessage(message.text))}
            closeMenuAfterSendMessage={closeMenuAfterSendMessage}
            avoidUniqueChat={avoidUniqueChat}
            onDragStart={() => handleDragStart(index)}
            onDragEnd={() => handleDragEnd(index)}
            onDragEnter={() => handleDragEnter(index)}
            moveMessage={moveMessage}
            removeMessage={removeMessage}
            updateMessage={updateMessage}
            labels={labels}
          />
        ))}
    </div>
  )
}

export { PopoverMenuBody }
