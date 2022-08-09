const Button = (props) => {

  return (
    <button
      className={ props.className }
      data-type={ props.dataType ? props.dataType : undefined }
      aria-controls={ props.ariaControls ? props.ariaControls : undefined }
      aria-expanded={ props.ariaExpanded ? props.ariaExpanded : undefined }
      onClick={ props.onClickEvent ? () => props.onClickEvent() : undefined }
    >
			{ props.children ? props.children : undefined }
		</button>
  );
};

export default Button;