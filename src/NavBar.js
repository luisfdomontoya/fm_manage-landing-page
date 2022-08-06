import React from 'react';
import UList from './UList';

const NavBar = (props) => {
  return (
    <nav className={ props.className ? props.className : undefined } >
			<UList
				className=''
				role=''
				aria-label=''
			>
				{ props.children }
			</UList>
		</nav>
  );
};

export default NavBar;