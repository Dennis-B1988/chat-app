import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../environment/firebase.prod';
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from './header.styles';

function Header ({togglePolicy, showPolicy}) {
    const [user] = useAuthState(auth);

    const signOutAndDeleteUserFromDatabase = async () => {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider);
        await user.delete();
        await auth.signOut();
    }

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar onClick={signOutAndDeleteUserFromDatabase} src={user?.photoURL} alt={user?.displayName} />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon 
                    onClick={togglePolicy} 
                    style={{ color: showPolicy ? 'gray' : 'white'}} />
            </HeaderRight>
        </HeaderContainer>
    )
}
 
export default Header;