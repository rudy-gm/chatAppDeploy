import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import '../css/chat.css'

const Chat = ({location}) => {

  useEffect(()=>{
    const data = queryString.parse(location.search);

    console.log(location.search);
    console.log(data)
  })

  return (
    <h1>Chat</h1>
  )
}

export default Chat