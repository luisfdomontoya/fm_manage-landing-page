import React from 'react';
import Feature from './Feature';

const FeatureList = ({ featureItems }) => {
  return (
		<div>
			<ul>
				{featureItems.map(item => (
					<li key={ item.id }>
						<Feature
							id={ item.id }
							title={ item.title }
							content={ item.content }
						/>
					</li>
				))}
			</ul>
		</div>
  );
};

export default FeatureList;