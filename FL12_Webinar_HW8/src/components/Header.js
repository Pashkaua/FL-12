import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <input id="inp-search" type="text" placeholder="search" />

            <Link id="link-add" to='/add'>Add course</Link>
        </div>


    );
}

export default Header;
