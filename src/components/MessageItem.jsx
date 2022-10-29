import React, { useState } from 'react'
import { Button, Input } from "rsuite"
import { sendTwitchMessage } from '../twitch.js'

import { copyMessage, deleteMessage, editMessage } from '../messages.js'

const MessageItem = ({ message, toggleWhisper, index }) => {
  const [editMode, setEditMode] = useState(false)
  const [localMessageText, setLocalMessageText] = useState(message)

  const sendMessage = (text) => {
    sendTwitchMessage(text)
    toggleWhisper()
  }

  const deleteMessageByIndex = () => {
    deleteMessage(index)
    toggleWhisper()
  }

  const edit = () => {
    editMessage(index, localMessageText)
    toggleWhisper()
  }

  return (
    <div style={{ display: 'flex', border: '1px solid #3c3f43', borderRadius: '6px', gap: '1rem', padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', flex: '3' }}>
        <div>
          {
            editMode ?
            <Input
              as="textarea"
              rows={4}
              placeholder="Message"
              onChange={(e) => setLocalMessageText(e)}
              value={localMessageText}
            /> :
            <p style={{wordBreak: 'break-all'}}>{ message ? message : "Error" }</p>
          }
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button
          size='xs'
          onClick={editMode ? () => edit() : () => setEditMode(true)}
          >
            {editMode ? "Guardar" : "Editar"}
            </Button>
          <Button disabled={editMode} size='xs' onClick={() => deleteMessageByIndex()}>Borrar</Button>
          <Button size='xs' onClick={() => copyMessage(message)}>Copiar</Button>
        </div>
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
        <Button
          size='sm'
          disabled={editMode}
          onClick={()=> sendMessage(message)}
        >
          Enviar
        </Button>
      </div>
    </div>
  )
}

export { MessageItem }