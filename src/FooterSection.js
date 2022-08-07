import React from 'react';
import Button from './Button';
import { socialContent, navContent } from './content';
import UList from './UList';

const FooterSection = () => {
  return (
    <footer className='text-neutral-100 padding-block-700 bg-neutral-900' style={{border: '1px solid blue'}}>
			<div className='container'>
				<div className='even-columns' style={{backgroundColor: 'black'}}>
					<a href="#"><img src={ require('./images/logo.svg').default } alt='Manage logo' /></a>
					<UList
						className=''
						role=''
						aria-label='social list'
					>
						{
							socialContent.map(item => (
								<li key={ item.id } >
									<a
										href={ item.url }
										aria-label={ item.name }
									>
										<img
											src={ item.icon }
											alt={ item.name }
										/>
									</a>
								</li>
							))
						}
					</UList>
				</div>
				<div>
					<nav className='footer-nav'>
						<UList
							className=''
							role='list'
							aria-label='footer'
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
				</div>
				<div>
					<form>
						<input type="email" />
						<Button className='button'>Go</Button>
					</form>
					<p>Copyright 2022. All rights reserved</p>
				</div>
			</div>
		</footer>
  );
};

export default FooterSection;