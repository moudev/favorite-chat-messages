import React, { useRef, useState, useCallback } from "react"
import { Whisper, Button } from 'rsuite';

import { PopoverMenu } from "./PopoverMenu.jsx";

import { getCurrentTwitchEmotes, getCurrentChannelInformation } from "../twitch.js";

const PickerButton = () => {
  const [whisperOpen, setWhisperOpen] = useState(false)
  const whisperRef = useRef(null)

  const toggleWhisper = useCallback(
    whisperOpen ?
      () => whisperRef.current.close() :
      () => whisperRef.current.open(),
    [whisperOpen, whisperRef,]
  )

  console.log("currentTwitchEmotes", getCurrentTwitchEmotes())
  console.log("getCurrentChannelInformation", getCurrentChannelInformation())
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

