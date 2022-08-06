import React from 'react';
import logo from './images/logo.svg';
import NavBar from './NavBar';
import Button from './Button';
import { navContent } from './content';

const Header = () => {
  return (
    <header className='primary-header'>
      <div className="container">
				<a href="#"><img src={ logo } alt='logo' /></a>
				<NavBar navOptions={ navContent } className='primary-navigation'/>
				<Button text='Get Started'/>
			</div>
    </header>
  );
};

export default Header;