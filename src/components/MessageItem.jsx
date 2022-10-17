import React from 'react'
import { Button } from "rsuite"

const MessageItem = () => {
  return (
    <div style={{ display: 'flex', border: '1px solid #3c3f43', borderRadius: '6px', gap: '1rem', padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', flex: '3' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>Title</p>
          <p>Message</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button size='xs'>Editar</Button>
          <Button size='xs'>Borrar</Button>
          <Button size='xs'>Copiar</Button>
        </div>
      </div>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
        <Button size='sm'>Enviar</Button>
      </div>
    </div>
  )
}

export { MessageItem }