import React from 'react';
import Button from './Button';
import UList from './UList';
import Testimonial from './Testimonial';
import { testimonialContent } from './content';

const TestimonialSection = () => {
  return (
    <section className='carousel | padding-block-700'>
			<h2 className='fs-secondary-heading fw-bold'>What they've said</h2>
			<div>
				<UList
					className='numbered-items'
					role=''
					aria-label=''
				>
					{
						(testimonialContent).map(item => (
							<li key={ item.id } >
								<Testimonial
									image={ item.image }
									name={ item.name }
									content={ item.content }
								/>
							</li>
						))
					}
				</UList>
			</div>
			<Button className='button'>Get Started</Button>
    </section>
  );
};

export default TestimonialSection;