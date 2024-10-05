import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './sidebar.styles';

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
    </SidebarContainer>
  )
}

export default Sidebar;