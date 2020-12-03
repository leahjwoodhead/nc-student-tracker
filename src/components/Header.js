import React from 'react';
import styled from 'styled-components'

const Welcome = styled.header`
    color: #eb1b24;
    font-size: 2rem;
    font-family: MarkPro,sans-serif;
    animation: blinker 1s linear infinite;

    @keyframes blinker {
    0% {color: #eb1b24;}
    50% {color: white }
    100% {color: #eb1b24;}
    }
`;


const Header = () => {
    return (
        <Welcome>
            <h1>Student Tracker</h1>
        </Welcome>
    );
};

export default Header;