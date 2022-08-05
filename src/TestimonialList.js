import React from 'react';
import Testimonial from './Testimonial';

const testimonialList = ({ testimonialItems }) => {
  return (
    <ul>
      {testimonialItems.map(item => (
				<li key={ item.id }>
					<Testimonial
						image={ item.image }
						name={ item.name }
						content={ item.content }
					/>
				</li>
			))}
    </ul>
  );
};

export default testimonialList;