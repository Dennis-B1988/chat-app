import React from 'react';
import { MessageContainer, MessageInfoContainer } from './message.styles';

function Message({message, timestamp, user, userImage}) {
  return (
    <MessageContainer>
        <img src={userImage} alt={user}/>
        <MessageInfoContainer>
            <h4>
                {user} {' '}
                <span>{timestamp?.toDate().toLocaleString()}</span>
            </h4>
            <p>{message}</p>
        </MessageInfoContainer>
    </MessageContainer>
  )
}

export default Message