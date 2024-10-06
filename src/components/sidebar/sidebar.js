import AppsIcon from '@mui/icons-material/Apps';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CreateIcon from '@mui/icons-material/Create';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InboxIcon from '@mui/icons-material/Inbox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React from 'react';
import SidebarOption from '../sidebar-option/sidebar-option';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './sidebar.styles';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Sidebar() {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Chat-App</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Dennis Baust
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

    </SidebarContainer>
  )
}

export default Sidebar;