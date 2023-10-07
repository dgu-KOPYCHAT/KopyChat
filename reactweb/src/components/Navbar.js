import React from 'react';

const Button = ({ text }) => {
  return (
    <button>{text}</button>
  );
};

const Navbar = () => {
    const listStyle = {
        list_style: 'none',
        display: 'flex',
        padding: 0,
    }

    return (
        <nav>
        <ul style={listStyle}>
            <li><Button text="풀이" /></li>
            <li><Button text="기록" /></li>
            <li><Button text="사용자" /></li>
        </ul>
        </nav>
    );
};

export default Navbar;
