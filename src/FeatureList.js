import React from 'react';
import Feature from './Feature';

const FeatureList = ({ featureItems }) => {
  return (
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
  );
};

export default FeatureList;