import React, { useState, useEffect } from 'react'
import {
  CustomProvider,
  Popover,
  Button,
  Checkbox,
  IconButton,
  Panel,
} from 'rsuite'
import DragableIcon from '@rsuite/icons/Dragable'

import { PopoverMenuHeader } from './PopoverMenuHeader.jsx'
import { PopoverMenuBody } from './PopoverMenuBody.jsx'
import { getMessages } from '../../messages.js'
import { getAllEmotes } from '../../fetch-emotes.js'

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
      panelTitle: 'Options',
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
      panelTitle: 'Opciones',
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

  const handleDragEnd = (e) => {
    if (e.target?.parentElement?.parentElement) {
      e.target.parentElement.parentElement.style.top = e.clientY + 'px'
      e.target.parentElement.parentElement.style.left = e.clientX + 'px'
    }
  }

  return (
    <CustomProvider theme="dark">
      <Popover
        {...props}
        ref={ref}
        style={{ width: '350px', backgroundColor: '#292d33', zIndex: '1000' }}
      >
        <div
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '-16px',
            left: '-20px',
          }}
          draggable
          onDragEnd={handleDragEnd}
        >
          <IconButton icon={<DragableIcon />} circle style={{ zIndex: '-1' }} />
        </div>

        <Panel
          header={<Button>{labels.panelTitle}</Button>}
          collapsible
          style={{ padding: '0px' }}
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
              margin: '0rem 0rem 1rem 0rem',
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
        </Panel>

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
