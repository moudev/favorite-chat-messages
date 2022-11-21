import React, { useState, useEffect } from "react"
import { CustomProvider, Popover, Button, Input, Loader, Checkbox } from 'rsuite';
import parse from "html-react-parser";

import { MessageItem } from "./MessageItem.jsx"
import { getMessages, saveMessage, updateMessageList } from "../messages.js";
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

const PopoverMenuBody = ({ toggleWhisper, emotes, loadingEmotes, closeMenuAfterSendMessage }) => {
  const [messages, setMessages] = useState([]);
  const [position, setPosition] = useState({ start: 0, end: 0 });

  useEffect(() => {
    setMessages(getMessages());
  }, []);

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

  const handleDragStart = (e) => {
    setPosition({ ...position, start: e });
  };

  const handleDragEnter = (e) => {
    setPosition({ ...position, end: e });
  };

  const handleDragEnd = (e) => {
    const tmpMessages = messages;

    const taskToAdd = tmpMessages.splice(position.start, 1)[0];
    tmpMessages.splice(position.end, 0, taskToAdd);

    setMessages(tmpMessages);
    setPosition({ start: 0, end: 0 });

    updateMessageList(messages);
  };

  const moveMessage = (actualPosition, positions) => {
    const lastItemIndex = messages.length - 1

    if (
      (actualPosition === 0 && positions <= -1) ||
      (actualPosition === lastItemIndex && positions >= 1)
    ) {
      return
    }

    const tmpMessages = messages;
    const taskToAdd = tmpMessages.splice(actualPosition, 1)[0];

    tmpMessages.splice((actualPosition + positions), 0, taskToAdd);

    setMessages([...tmpMessages]) // was not updated for the splice behavior

    updateMessageList(messages)
  }

  return (
    <div style={{ height: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {
        loadingEmotes && (
          <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center', padding: '3rem'}}>
            <Loader size="md"  content="loading..." vertical />
          </div>
        )
      }

      {
        (!messages || messages.length === 0) && <p>No saved messages</p>
      }

      {
        !loadingEmotes && messages.map((message, index) => (
          <MessageItem
            message={message.text}
            key={`${message.text}-${index}`}
            toggleWhisper={toggleWhisper}
            index={index}
            convertedMessageToJSX={parse(transformMessage(message.text))}
            closeMenuAfterSendMessage={closeMenuAfterSendMessage}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={() => handleDragEnd(index)}
            onDragEnter={() => handleDragEnter(index)}
            moveMessage={moveMessage}
          />
        ))
      }
    </div>
  )
}

const PopoverMenu = React.forwardRef((props, ref) => {
  const [emotes, setEmotes] = useState({})
  const [loadingEmotes, setLoadingEmotes] = useState(true)
  const [closeMenuAfterSendMessage, setCloseMenuAfterSendMessage] = useState(true)

  useEffect(() => {
    const fetchEmotes = async () => {
      const emotesResponse = await getAllEmotes()
      setEmotes(emotesResponse);
      setLoadingEmotes(false)
    };
    fetchEmotes();
  }, []);

  return (
    <CustomProvider theme="dark">
      <Popover
        {...props}
        ref={ref}
        style={{ width: '350px', backgroundColor: '#292d33' }}
      >
        <PopoverMenuHeader toggleWhisper={props.toggleWhisper} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 0rem' }}>
          <Checkbox
            checked={closeMenuAfterSendMessage}
            onChange={() => setCloseMenuAfterSendMessage(!closeMenuAfterSendMessage)}
          >
            Close menu after send a message
          </Checkbox>
        </div>
        <PopoverMenuBody
          toggleWhisper={props.toggleWhisper}
          emotes={emotes}
          loadingEmotes={loadingEmotes}
          closeMenuAfterSendMessage={closeMenuAfterSendMessage}
        />
      </Popover>
    </CustomProvider>
  )
})

export { PopoverMenu }
