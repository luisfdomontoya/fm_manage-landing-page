// import './App.css';

import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className='bg-accent-400'>
			<div className="container">
				<div className="even-columns">
					<div>
						<h1 className='fs-primary-heading fw-bold'>Bring everyone together to build better products.</h1>
						<p>Manage makes it simple for software teams to plan day-to-day task while keeping the larger team goals in view.</p>
						<Button className='button'>Get Started</Button>
					</div>
					<div>
						<img src={ require('./images/illustration-intro.svg').default } alt='hero-image' />
					</div>
				</div>
			</div>
		</section>
  );
};

export default HeroSection;