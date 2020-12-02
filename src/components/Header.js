import React from 'react';
import styled from 'styled-components'

const Welcome = styled.header`
    color: #eb1b24;
    font-size: 2rem;
    font-family: MarkPro,sans-serif;
`;


const Header = () => {
    return (
        <Welcome>
            <h1>Student Tracker</h1>
        </Welcome>
    );
};

export default Header;