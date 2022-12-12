import React, { useRef, useState, useCallback } from 'react'
import { Whisper, Button } from 'rsuite'

import { PopoverMenu } from './PopoverMenu.jsx'

const PickerButton = () => {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/emote_menu/components/LegacyButton.jsx#L18
  const [whisperOpen, setWhisperOpen] = useState(false)
  const whisperRef = useRef(null)

  const toggleWhisper = useCallback(
    whisperOpen
      ? () => whisperRef.current.close()
      : () => whisperRef.current.open(),
    [whisperOpen, whisperRef]
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
      <Button appearance="subtle" size="sm" style={{ display: 'flex' }}>
        <svg
          style={{ width: '18px', height: '18px' }}
          version="1.1"
          viewBox="0 0 33.867 33.867"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(7.0155 0 0 7.5552 -47.246 196.2)" fill="#772ce8">
            <path
              d="m8.7078-23.313-0.58706-1.9866 1.9569 0.59595-0.73872 0.24832 0.83657 0.84924-0.3865 0.39235-0.83657-0.84924-0.24462 0.74991"
              strokeWidth=".5589"
            />
            <path
              d="m8.8489-21.486 0.2993-0.17241-0.68963-1.2068h-1.0344a0.3443 0.3443 0 0 1-0.34481-0.34481v-2.0689a0.3443 0.3443 0 0 1 0.34481-0.34481h3.4481a0.3443 0.3443 0 0 1 0.34481 0.34481v2.0689a0.3443 0.3443 0 0 1-0.34481 0.34481h-1.5517v0.34481h1.5517a0.68963 0.68963 0 0 0 0.68963-0.68963v-2.0689a0.68946 0.68946 0 0 0-0.68963-0.68963h-3.4481a0.68946 0.68946 0 0 0-0.68963 0.68963v2.0689a0.68963 0.68963 0 0 0 0.68963 0.68963h0.83359z"
              strokeWidth=".17241"
            />
          </g>
        </svg>
      </Button>
    </Whisper>
  )
}

export { PickerButton }
