import React from "react"
import { CustomProvider, Popover, Button, Input } from 'rsuite';

const PopoverMenuHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: "0.5rem"
      }}
    >
      <Input
        as="textarea"
        rows={2}
        placeholder="Message"
        style={{ flex: "2"}}
      />
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button style={{ flex: "1"}}>
          Guardar
        </Button>
      </div>
    </div>
  )
}

const PopoverMenuBody = () => {
  return (
    <div style={{ height: '350px' }}>
      <p>Content</p>
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
