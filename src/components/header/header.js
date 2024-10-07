import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../environment/firebase.prod';
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from './header.styles';

function Header () {
    const [user] = useAuthState(auth);

    const signOutAndDeleteUserFromDatabase = async () => {
        await user.delete();
        await auth.signOut();
    }

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar onClick={signOutAndDeleteUserFromDatabase} src={user?.photoURL} alt={user?.displayName} />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}
 
export default Header;