import React from 'react';
import NavBar from './NavBar';
import Button from './Button';
import { navContent } from './content';

const Header = () => {
  return (
    <header className='primary-header'>
      <div className="container">
				<a href="#"><img src={ require('./images/logo.svg').default } alt='Manage logo' /></a>
				<NavBar
          className='primary-navigation'
        >
          {
					  navContent.map(item => (
              <li key={ item.id } >
                <a href="#">{ item.title }</a>
              </li>
            ))
          }
        </NavBar>
				<Button text='Get Started'/>
			</div>
    </header>
  );
};

export default Header;