import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React from 'react';
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight } from './chat.styles';

function chat() {
  return (
    <ChatContainer>
        <ChatHeader>
            <ChatHeaderLeft>
                <h4><strong>#Room Name</strong></h4>
                <StarBorderOutlinedIcon />
            </ChatHeaderLeft>

            <ChatHeaderRight>
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </ChatHeaderRight>
        </ChatHeader>
    </ChatContainer>
  )
}

export default chat