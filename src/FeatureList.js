import React from 'react';
import Feature from './Feature';

const FeatureList = (props) => {
  return (
		<div>
			<ul
				className={ props.className ? props.className : undefined }
				role={ props.role ? props.role : 'list'}
				aria-label={ props.areaLabel ? props.areaLabel : 'features' }
			>
				{props.featureItems.map(item => (
					<li
						key={ item.id }
					>
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