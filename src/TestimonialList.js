import React from 'react';
import Testimonial from './Testimonial';

const testimonialList = ({ testimonialContent }) => {
  return (
		<div>
			<ul>
				{testimonialContent.map(item => (
					<li key={ item.id }>
						<Testimonial
							image={ item.image }
							name={ item.name }
							content={ item.content }
						/>
					</li>
				))}
			</ul>
		</div>
  );
};

export default testimonialList;