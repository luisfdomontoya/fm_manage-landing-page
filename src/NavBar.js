import React from 'react';

const NavBar = (props) => {
  return (
    <nav className={ props.className ? props.className : undefined } >
			<ul
				className={ props.ulClassName ? props.ulClassName : 'nav-list' }
				role={ props.ulRole ? props.ulRole : 'list'}
				aria-label={ props.ulAreaLabel ? props.ulAreaLabel : 'nav-list' }
			>
				{props.navOptions.map(item => (
					<li
						key={ item.id }
					>
						<a
							href="#"
						>
							{ item.title }
						</a>
					</li>
				))}
			</ul>
		</nav>
  );
};

export default NavBar;