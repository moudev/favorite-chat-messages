import React, { useState } from "react"
import { CustomProvider, Popover, Button, Input } from 'rsuite';

import { MessageItem } from "./MessageItem.jsx"
import { getMessages, saveMessage } from "../messages.js";

const PopoverMenuHeader = ({ toggleWhisper }) => {
  const [message, setMessage] = useState("")

  const save = () => {
    if (!message) {
      return
    }

    saveMessage(message)
    setMessage('')
    toggleWhisper()
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: "0.5rem"
      }}
    >
      <div style={{ flex: '2', display: 'flex', flexDirection: "column" }}>
        <Input
          as="textarea"
          rows={2}
          placeholder="Message"
          onChange={(text) => setMessage(text)}
        />
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button style={{ flex: "1"}} onClick={() => save()}>
          Guardar
        </Button>
      </div>
    </div>
  )
}

const PopoverMenuBody = ({ toggleWhisper }) => {
  const messages = getMessages()
  return (
    <div style={{ height: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {
        (!messages || messages.length === 0) && <p>No saved messages</p>
      }

      {
        messages.map((message, index) => (
          <MessageItem
            message={message.text}
            key={`${message.text}-${index}`}
            toggleWhisper={toggleWhisper}
            index={index}
          />
        ))
      }
    </div>
  )
}

const PopoverMenu = React.forwardRef((props, ref) => {
  return (
    <CustomProvider theme="dark">
      <Popover
        {...props}
        ref={ref}
        style={{ width: '300px', backgroundColor: '#292d33' }}
      >
        <PopoverMenuHeader toggleWhisper={props.toggleWhisper} />
        <PopoverMenuBody toggleWhisper={props.toggleWhisper} />
      </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
