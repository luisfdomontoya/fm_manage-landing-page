import React from 'react';

const UList = (props) => {
  return (
    <ul
			className={ props.className ? props.className : '' }
			role={ props.role ? props.role : 'list'}
			aria-label={ props.areaLabel ? props.areaLabel : 'list' }
		>
			{ props.children }
		</ul>
  );
};

export default UList;