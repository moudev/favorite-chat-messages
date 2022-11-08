import React, { useState, useEffect } from "react"
import { CustomProvider, Popover, Button, Input } from 'rsuite';
import parse from "html-react-parser";

import { MessageItem } from "./MessageItem.jsx"
import { getMessages, saveMessage } from "../messages.js";
import { getAllEmotes } from "../fetch-emotes.js";
import { renderEmoji } from "../utils.js";

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

const PopoverMenuBody = ({ toggleWhisper, emotes }) => {
  const messages = getMessages()

  const transformMessage = (message) => {
    const chunks = message.split(/\s|\n/gm)

    const transformedRawTextChunks = chunks.map((chunk) => {
      const emote = emotes[chunk.trim()]

      if (emote) {
        if (emote.provider === "emoji-toolkit") {
          return renderEmoji(emote.url)
        }

        return `<img alt='${emote.code}' src='${emote.url}'  />`
      }
      return chunk
    })

    const rawText = transformedRawTextChunks.join(" ")

    return rawText
  }

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
            convertedMessageToJSX={parse(transformMessage(message.text))}
          />
        ))
      }
    </div>
  )
}

const PopoverMenu = React.forwardRef((props, ref) => {
  const [emotes, setEmotes] = useState({})

  useEffect(() => {
    const fetchEmotes = async () => {
      const emotesResponse = await getAllEmotes()
      setEmotes(emotesResponse);
    };
    fetchEmotes();
  }, []);

  return (
    <CustomProvider theme="dark">
      <Popover
        {...props}
        ref={ref}
        style={{ width: '300px', backgroundColor: '#292d33' }}
      >
        <PopoverMenuHeader toggleWhisper={props.toggleWhisper} />
        <PopoverMenuBody
          toggleWhisper={props.toggleWhisper}
          emotes={emotes}
        />
      </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
