import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section>
			<div className="container">
				<div className="even-columns">
					<div>
						<h1>Bring everyone together to build better products.</h1>
						<p>Manage makes it simple for software teams to plan day-to-day task while keeping the larger team goals in view.</p>
						<Button text='Get Started'/>
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