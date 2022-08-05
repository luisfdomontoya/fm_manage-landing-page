import React from 'react';
import logo from './images/logo.svg';
import NavBar from './NavBar';

const Header = ({ navItems }) => {
  return (
    <header className='primary-header'>
      <div className="container">
				<a href="#"><img src={ logo } alt="logo" /></a>
				<NavBar navOptions={ navItems } />
				<button className="button">Get Started</button>
			</div>
    </header>
  );
};

export default Header;