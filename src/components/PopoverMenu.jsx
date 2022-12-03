import React, { useState, useEffect } from 'react'
import {
  CustomProvider,
  Popover,
  Button,
  Input,
  Loader,
  Checkbox,
  Toggle,
} from 'rsuite'
import parse from 'html-react-parser'

import { MessageItem } from './MessageItem.jsx'
import {
  getMessages,
  saveMessage,
  updateMessageList,
  editMessage,
  deleteMessage,
} from '../messages.js'
import { getAllEmotes } from '../fetch-emotes.js'
import { renderEmoji } from '../utils.js'

const PopoverMenuHeader = ({
  messages,
  setMessages,
  labels,
  spanishLang,
  updateLanguage,
}) => {
  const [message, setMessage] = useState('')

  const save = () => {
    if (!message) {
      return
    }

    saveMessage(message)
    console.log('message', message)
    setMessages([{ text: message }, ...messages])
    setMessage('')
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
        <Input
          as="textarea"
          rows={2}
          placeholder={labels.inputPlaceholder}
          onChange={(text) => setMessage(text)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '100%' }}>
          <Button
            style={{ width: '100%' }}
            onClick={() => save()}
            disabled={!message}
          >
            {labels.saveButton}
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Toggle
            size="md"
            checkedChildren="Español"
            unCheckedChildren="English"
            onChange={updateLanguage}
            checked={spanishLang}
          />
        </div>
      </div>
    </div>
  )
}

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
            draggable
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

// eslint-disable-next-line react/display-name
const PopoverMenu = React.forwardRef((props, ref) => {
  const [emotes, setEmotes] = useState({})
  const [messages, setMessages] = useState([])
  const [loadingEmotes, setLoadingEmotes] = useState(true)
  const [closeMenuAfterSendMessage, setCloseMenuAfterSendMessage] =
    useState(true)
  const [avoidUniqueChat, setAvoidUniqueChat] = useState(false)
  const [spanishLang, setSpanishLang] = useState(false)
  const languages = {
    en: {
      saveButton: 'Save',
      inputPlaceholder: 'Message',
      sendButton: 'Send',
      editButton: 'Edit',
      deleteButton: 'Delete',
      copyButton: 'Copy',
      closeModalAfterSendMessageCheckbox: 'Close menu after send a message',
      avoidUniqueChatCheckbox: 'Avoid unique chat',
    },
    es: {
      saveButton: 'Guardar',
      inputPlaceholder: 'Mensaje',
      sendButton: 'Enviar',
      editButton: 'Editar',
      deleteButton: 'Borrar',
      copyButton: 'Copiar',
      closeModalAfterSendMessageCheckbox:
        'Cerrar menú despues de enviar mensaje',
      avoidUniqueChatCheckbox: 'Evitar chat único',
    },
  }
  const [labels, setLabels] = useState(languages.en)

  useEffect(() => {
    const fetchEmotes = async () => {
      const emotesResponse = await getAllEmotes()
      setEmotes(emotesResponse)
      setLoadingEmotes(false)
    }

    fetchEmotes()
    setMessages(getMessages())

    const lang = localStorage.getItem('twitch-messages-lang')
    if (lang) {
      setLabels(languages[lang])
      if (lang === 'es') {
        setSpanishLang(true)
      }
    }
  }, [])

  const updateLanguage = () => {
    const newLanguageIsSpanish = !spanishLang
    if (newLanguageIsSpanish) {
      setLabels(languages.es)
      setSpanishLang(true)
      localStorage.setItem('twitch-messages-lang', 'es')
    } else {
      setLabels(languages.en)
      setSpanishLang(false)
      localStorage.setItem('twitch-messages-lang', 'en')
    }
  }

  return (
    <CustomProvider theme="dark">
      <Popover
        {...props}
        ref={ref}
        style={{ width: '350px', backgroundColor: '#292d33', zIndex: '1' }}
      >
        <PopoverMenuHeader
          toggleWhisper={props.toggleWhisper}
          messages={messages}
          setMessages={setMessages}
          labels={labels}
          spanishLang={spanishLang}
          updateLanguage={updateLanguage}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '1rem 0rem',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <Checkbox
            checked={closeMenuAfterSendMessage}
            onChange={() =>
              setCloseMenuAfterSendMessage(!closeMenuAfterSendMessage)
            }
          >
            {labels.closeModalAfterSendMessageCheckbox}
          </Checkbox>
          <Checkbox
            checked={avoidUniqueChat}
            onChange={() => setAvoidUniqueChat(!avoidUniqueChat)}
          >
            {labels.avoidUniqueChatCheckbox}
          </Checkbox>
        </div>
        <PopoverMenuBody
          toggleWhisper={props.toggleWhisper}
          emotes={emotes}
          loadingEmotes={loadingEmotes}
          closeMenuAfterSendMessage={closeMenuAfterSendMessage}
          avoidUniqueChat={avoidUniqueChat}
          messages={messages}
          setMessages={setMessages}
          labels={labels}
        />
      </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
