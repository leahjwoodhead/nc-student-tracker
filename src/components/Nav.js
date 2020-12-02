import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/students">
                <button>Students</button>
            </Link>
            <Link to="/graduates">
                <button>Graduates</button>
            </Link>
            <Link to="/blocks">
                <button>Block Breakdown</button>
            </Link>
        </nav>
    );
};

export default Nav;