import React from "react"
import { CustomProvider, Popover, Button, Input } from 'rsuite';

import { MessageItem } from "./MessageItem.jsx"
import { sendTwitchMessage } from "../twitch.js"

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
          as="textarea"
          rows={2}
          placeholder="Message"
        />
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button style={{ flex: "1"}} onClick={() => sendTwitchMessage("jajajaj")}>
          Guardar
        </Button>
      </div>
    </div>
  )
}

const PopoverMenuBody = () => {
  return (
    <div style={{ height: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <MessageItem message="test" />
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
