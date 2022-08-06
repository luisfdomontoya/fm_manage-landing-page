import React from 'react';
import { socialContent } from './content';
import UList from './UList';

const FooterSection = () => {
  return (
    <footer className='bg-neutral-900 text-neutral-100'>
			<div className='container'>
				<div
					className='even-columns'
					style={{backgroundColor: 'black'}}
				>
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
			</div>
		</footer>
  );
};

export default FooterSection;