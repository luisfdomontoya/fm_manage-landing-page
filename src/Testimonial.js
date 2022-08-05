import React from 'react';

const Testimonial = ({ image, name, content }) => {
  return (
    <div>
			<img src={ image } alt="photo" />
			<div>
				<h3>{ name }</h3>
				<p>{ content }</p>
			</div>
		</div>
  );
};

export default Testimonial;