// import './App.css';

import React from 'react';
import { navContent } from './content';
import Button from './Button';
import UList from './UList';

const Header = () => {
  return (
    <header className='primary-header'>
      <div className="container">
				<a href="#"><img src={ require('./images/logo.svg').default } alt='Manage logo' /></a>
				<nav className='primary-navigation'>
          <UList
						className='nav-list'
						role='list'
						aria-label='primary'
					>
						{
							navContent.map(item => (
								<li key={ item.id } >
									<a href={ item.url } >
                    { item.title }
									</a>
								</li>
							))
						}
					</UList>
        </nav>
				<Button className='button'>Get Started</Button>
			</div>
    </header>
  );
};

export default Header;