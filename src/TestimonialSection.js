import React from 'react';
import Button from './Button';
import TestimonialList from './TestimonialList';
import { testimonialContent } from './content';

const TestimonialSection = () => {
  return (
    <section>
			<div className="container">
				<h1>What they've said</h1>
				<TestimonialList testimonialContent={ testimonialContent } />
				<Button text='Get Started' />
			</div>
    </section>
  );
};

export default TestimonialSection;