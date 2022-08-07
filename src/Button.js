import React from 'react';

const Button = (props) => {
  return (
    <button
      className={ props.className }
      data-type={ props.dataType ? props.dataType : '' }
    >
			{ props.children }
		</button>
  );
};

export default Button;