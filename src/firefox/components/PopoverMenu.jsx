import React from "react"
import { CustomProvider, Popover } from 'rsuite';

const PopoverMenu = React.forwardRef((props, ref) => {
  return (
    <CustomProvider theme="dark">
    <Popover
      {...props}
      ref={ref}
    >
      Menu
    </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
