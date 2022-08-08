import React from 'react';

const Button = (props) => {
  return (
    <button
      className={ props.className }
      data-type={ props.dataType ? props.dataType : undefined }
      aria-control={ props.ariaControl ? props.ariaControl : undefined }
    >
			{ props.children ? props.children : undefined }
		</button>
  );
};

export default Button;