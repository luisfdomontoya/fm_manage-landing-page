import React from 'react';

const NavBar = ({ navOptions }) => {
  return (
    <nav className="primary-navigation">
			<ul className="nav-list">
				{navOptions.map(item => (
					<li key={ item.id }>
						<a href="#">{ item.title }</a>
					</li>
				))}
			</ul>
		</nav>
  );
};

export default NavBar;