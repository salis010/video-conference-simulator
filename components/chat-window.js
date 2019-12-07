import React from 'react'
import socketIOClient from 'socket.io-client'

export class ChatWindow extends React.Component {
  constructor(props) {
    super(props)

    this.onSend = this.onSend.bind(this)
  }

  onSend() {
    const socket = socketIOClient("localhost:3000")
    console.log(socket)
  }

  render() {
    return (
      <button onClick={this.onSend}>Send</button>
    )
  }
}
