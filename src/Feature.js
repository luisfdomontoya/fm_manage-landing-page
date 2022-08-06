import React from 'react';

const Feature = ({ id, title, content }) => {
  return (
    <>
			<span>{ id }</span>
			<div>
				<h3 className='fs-600 fw-bold'>{ title }</h3>
				<p>{ content }</p>
			</div>
		</>
  );
};

export default Feature;