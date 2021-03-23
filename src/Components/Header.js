import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

    const { isAuthenticated } = useAuth0();


    return(
        <div className='header'>
            {isAuthenticated ? <LogoutButton/> : <LoginButton />}

        </div>
    );
}

export default Header;