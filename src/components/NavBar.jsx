import React from 'react';

const NavBar = () => {
  return (
    <header className='fixed-top'>
      <nav>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>experience</a>
          </li>
          <li>
            <a href='#projects'>projects</a>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
