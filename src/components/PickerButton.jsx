import React, { useRef, useState, useCallback } from "react";
import { Whisper, Button } from "rsuite";

import { PopoverMenu } from "./PopoverMenu.jsx";

const PickerButton = () => {
  // https://github.com/night/betterttv/blob/7.4.40/src/modules/emote_menu/components/LegacyButton.jsx#L18
  const [whisperOpen, setWhisperOpen] = useState(false);
  const whisperRef = useRef(null);

  const toggleWhisper = useCallback(
    whisperOpen
      ? () => whisperRef.current.close()
      : () => whisperRef.current.open(),
    [whisperOpen, whisperRef]
  );

  return (
    <Whisper
      placement="topEnd"
      trigger="click"
      speaker={<PopoverMenu toggleWhisper={toggleWhisper} />}
      ref={whisperRef}
      onOpen={() => setWhisperOpen(true)}
      onClose={() => setWhisperOpen(false)}
    >
      <Button appearance="subtle" size="sm" style={{ display: "flex" }}>
        <svg
          width="4.7625mm"
          height="4.7625mm"
          version="1.1"
          viewBox="0 0 4.7625 4.7625"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-192.33 -243.25)">
            <g
              transform="matrix(.55472 0 0 .56312 145.56 165.63)"
              fill="#772ce8"
            >
              <path d="m90.248 145.45-1.0583-3.5278 3.5278 1.0583-1.3317 0.44097 1.5081 1.5081-0.69674 0.69674-1.5081-1.5081-0.44097 1.3317" />
              <path
                d="m84.86 137.84-0.55139 1.4712v5.8823h2.0211v1.1038h1.1038l1.1023-1.1038h1.2247l-0.38602-1.2867h-1.0222l-1.1023 1.1023v-1.1023h-1.6552v-5.3315h6.0663v3.605l0.73484 0.22066v-4.561zm2.7569 2.2066v2.2061h0.73536v-2.2061zm2.0221 0v1.527l0.73484 0.22066v-1.7477z"
                stroke-width=".031592"
              />
            </g>
          </g>
        </svg>
      </Button>
    </Whisper>
  );
};

export { PickerButton };
