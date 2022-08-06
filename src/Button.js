import React from 'react';

const Button = (props) => {
  return (
    <button
      className={ props.className }
      data-type={ props.dataType ? props.dataType : '' }
    >
			{ props.text }
		</button>
  );
};

export default Button;