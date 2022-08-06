import React from 'react';
import { socialContent } from './content';

/**
 * I temporarily set the background to red because the icons are white
 */

const SocialNetworks = () => {
  return (
    <div style={{backgroundColor: 'red'}}>
			<ul>
				{socialContent.map(item => (
					<li key={ item.id }>
						<a href={ item.url }><img src={ item.icon } alt={ item.name } /></a>
					</li>
				))}
			</ul>
		</div>
  );
};

export default SocialNetworks;