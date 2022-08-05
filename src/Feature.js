import React from 'react';

const Feature = ({ id, title, content }) => {
  return (
    <>
			<span>{ id }</span>
			<div>
				<h3>{ title }</h3>
				<p>{ content }</p>
			</div>
		</>
  );
};

export default Feature;