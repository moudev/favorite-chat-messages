import React from "react"
import { CustomProvider, Popover, Button, Input } from 'rsuite';

import { MessageItem } from "./MessageItem.jsx"
import { getCurrentChat } from "../twitch.js"

const sendTwitchMessage = () => {
  const currentChat = getCurrentChat()
  if (!currentChat) return;
  currentChat.props.onSendMessage("test")
}

const PopoverMenuHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: "0.5rem"
      }}
    >
      <div style={{ flex: '2', display: 'flex', flexDirection: "column" }}>
        <Input
          placeholder="Title"
        />
        <Input
          as="textarea"
          rows={2}
          placeholder="Message"
        />
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button style={{ flex: "1"}} onClick={() => sendTwitchMessage()}>
          Guardar
        </Button>
      </div>
    </div>
  )
}

const PopoverMenuBody = () => {
  return (
    <div style={{ height: '350px' }}>
      <MessageItem />
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
        <PopoverMenuHeader />
        <PopoverMenuBody />
      </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
