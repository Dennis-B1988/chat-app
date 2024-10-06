import Button from '@mui/material/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../environment/firebase.prod';
import { ChatInputContainer } from './chat-input.styles';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');

    const sendMessage = async (event) => {
        event.preventDefault();

        if(!channelId) {
            return false;
        }

        await addDoc(collection(db, 'channels', channelId, 'messages'), {
        timestamp: serverTimestamp(),
        message: input,
        user: 'Dennis Baust',
        userImage: 'https://avatars.githubusercontent.com/u/10409711?v=4',
      });

      setInput('');
    };

  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={event => setInput(event.target.value)} placeholder={`Message #${channelName}`}/>
            <Button hidden type="submit" onClick={sendMessage}>Send</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput