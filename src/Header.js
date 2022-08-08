// import './App.css';

import React from 'react';
import { navContent } from './content';
import Button from './Button';
import UList from './UList';

const Header = () => {
  return (
    <header className='primary-header'>
      <div className="container">
				<div className='nav-wrapper'>
					<a href="#">
						<img
							src={ require('./images/logo.svg').default }
							alt='Manage logo'
						/>
					</a>
					<Button
						className='mobile-nav-toggle'
						ariaControl='primary-navigation'
					>
						<img
							className='icon-hamburger'
							src={ require('./images/icon-hamburger.svg').default }
							alt='icon hamburger'
						/>
						<img
							className='icon-close'
							src={ require('./images/icon-close.svg').default }
							alt='icon close'
						/>
						<span className='visually-hidden'>Menu</span>
					</Button>
					<nav className='primary-navigation'>
						<UList
							className='nav-list'
							id='primary-navigation'
							role='list'
							aria-label='primary'
						>
							{
								navContent.map(item => {
									if(item.type === 'header')
									{
										return (
										<li key={ item.id } >
											<a href={ item.url } >
												{ item.title }
											</a>
										</li>
										)
									}
								})
							}
						</UList>
					</nav>
					{/* <Button className='button'>Get Started</Button> */}
					<button className='button' style={{display: 'none'}}>Get Started</button>
				</div>
			</div>
    </header>
  );
};

export default Header;