import React from 'react';
import Button from './Button';
import UList from './UList';
import Testimonial from './Testimonial';
import { testimonialContent } from './content';

const TestimonialSection = () => {
  return (
    <section className='carousel'>
			<h2 className='fs-secondary-heading'>What they've said</h2>
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
			<Button className='button' text='Get Started' />
    </section>
  );
};

export default TestimonialSection;