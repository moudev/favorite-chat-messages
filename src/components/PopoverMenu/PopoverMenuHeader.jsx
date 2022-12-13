import React, { useState } from 'react'
import { Button, Input, Toggle } from 'rsuite'

import { saveMessage } from '../../messages.js'

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
    setMessages([{ text: message }, ...messages])
    setMessage('')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Toggle
        size="md"
        checkedChildren="Español"
        unCheckedChildren="English"
        onChange={updateLanguage}
        checked={spanishLang}
        style={{ alignSelf: 'flex-end' }}
      />
      <div>
        <Input
          as="textarea"
          rows={2}
          placeholder={labels.inputPlaceholder}
          onChange={(text) => setMessage(text)}
          style={{ marginBottom: '0.5rem' }}
          value={message}
        />
        <Button
          style={{ width: '100%' }}
          onClick={() => save()}
          disabled={!message}
        >
          {labels.saveButton}
        </Button>
      </div>
    </div>
  )
}

export { PopoverMenuHeader }
