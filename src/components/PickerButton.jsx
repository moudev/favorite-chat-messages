import React, { useRef, useState, useCallback } from "react"
import { Whisper, Button } from 'rsuite';

import { PopoverMenu } from "./PopoverMenu.jsx";

const PickerButton = () => {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/emote_menu/components/LegacyButton.jsx#L18
  const [whisperOpen, setWhisperOpen] = useState(false)
  const whisperRef = useRef(null)

  const toggleWhisper = useCallback(
    whisperOpen ?
      () => whisperRef.current.close() :
      () => whisperRef.current.open(),
    [whisperOpen, whisperRef,]
  )

  return (
    <Whisper
      placement="topEnd"
      trigger="click"
      speaker={<PopoverMenu toggleWhisper={toggleWhisper} />}
      ref={whisperRef}
      onOpen={() => setWhisperOpen(true)}
      onClose={() => setWhisperOpen(false)}
    >
      <Button>Click</Button>
    </Whisper>
  )
}

export { PickerButton }

