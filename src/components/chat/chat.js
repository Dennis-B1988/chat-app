import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../environment/firebase.prod';
import ChatInput from '../chat-input/chat-input';
import Message from '../message/message';
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages } from './chat.styles';

function Chat() {
    const channelId = useSelector((state) => state.app.channelId);

    const roomDocRef = channelId ? doc(db, 'channels', channelId) : null;
    const [roomDetails] = useDocument(roomDocRef);

    const channelMessagesQuery = channelId 
        ? query(collection(db, 'channels', channelId, 'messages'), orderBy('timestamp', 'asc'))
        : null;
    
    const [channelMessages] = useCollection(channelMessagesQuery);

    console.log("Room Details:", roomDetails?.data());
    console.log("Channel Messages:", channelMessages?.docs.map(doc => doc.data()));

  return (
    <ChatContainer>
        <>
        <ChatHeader>
            <ChatHeaderLeft>
                <h4><strong>#{roomDetails?.data().name}</strong></h4>
                <StarBorderOutlinedIcon />
            </ChatHeaderLeft>

            <ChatHeaderRight>
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </ChatHeaderRight>
        </ChatHeader>

        <ChatMessages>
            {channelMessages?.docs.map(doc => {
                const { message, timestamp, user, userImage } = doc.data();
                return (
                    <Message key={doc.id} message={message} timestamp={timestamp} user={user} userImage={userImage} />
                )
            })}
        </ChatMessages>
        <ChatInput channelName={roomDetails?.data().name} channelId={channelId}></ChatInput>
        </>
    </ChatContainer>
  )
}

export default Chat