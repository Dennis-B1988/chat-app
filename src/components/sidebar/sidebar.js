import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CreateIcon from '@mui/icons-material/Create';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InboxIcon from '@mui/icons-material/Inbox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../environment/firebase.prod';
import SidebarOption from '../sidebar-option/sidebar-option';
import { SideBarChannels, SidebarContainer, SidebarHeader, SidebarInfo, SidebarOptionContainer } from './sidebar.styles';

/**
 * Sidebar component. Conditionally renders a list of channel options or a list of channels, 
 * depending on the expandChannels state.
 * @param {{ $isSidebarVisible: boolean }} props
 * @prop {boolean} $isSidebarVisible if the sidebar is visible or not
 * @returns {React.ReactElement} The sidebar component
 */
function Sidebar({ $isSidebarVisible }) {
  const [channels] = useCollection(collection(db, 'channels'));
  const [user] = useAuthState(auth);
  const [expandOptions, setExpandOptions] = useState(false);
  const [expandChannels, setExpandChannels] = useState(true);

  const toggleExpandOptions = () => {
    setExpandOptions(prevState => !prevState);
  }

  const toggleExpandChannels = () => {
    setExpandChannels(prevState => !prevState);
  }

  return (
    <SidebarContainer $isSidebarVisible={$isSidebarVisible}>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Chat-App</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName || 'Guest'}
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOptionContainer style={{ display: expandOptions ? 'block' : 'none' }}>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
        </SidebarOptionContainer>
        <SidebarOption 
            onClick={toggleExpandOptions} 
            Icon={expandOptions ? ExpandLessIcon : ExpandMoreIcon} 
            title={expandOptions ? 'Show less' : 'Show more'}
            toggleList={toggleExpandOptions} 
        />
        <hr />
        <SidebarOption 
            onClick={toggleExpandChannels} 
            Icon={expandChannels ? ExpandMoreIcon : ExpandLessIcon} 
            title="Channels"
            toggleList={toggleExpandChannels}
        />
        <hr />
        <SideBarChannels style={{ display: expandChannels ? 'block' : 'none'}}>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
            ))}
        </SideBarChannels>
    </SidebarContainer>
  )
}

export default Sidebar;