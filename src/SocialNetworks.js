import React from 'react';
import { socialContent } from './content';

/**
 * I temporarily set the background to red because the icons are white
 */

const SocialNetworks = (props) => {
  return (
    <div
			style={{backgroundColor: 'red'}}
		>
			<ul
				className={ props.className ? props.className : undefined }
				role={ props.role ? props.role : 'list'}
				aria-label={ props.areaLabel ? props.areaLabel : 'social links' }
			>
				{socialContent.map(item => (
					<li
						key={ item.id }
					>
						<a
							href={ item.url }
							aria-label={ item.name }
						>
							<img
								src={ item.icon }
								alt={ item.name }
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
  );
};

export default SocialNetworks;