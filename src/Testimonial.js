import React from 'react';

const Testimonial = ({ image, name, content }) => {
  return (
    <>
			<img src={ image } alt="profile-picture" />
			<div>
				<h3>{ name }</h3>
				<p>{ content }</p>
			</div>
		</>
  );
};

export default Testimonial;