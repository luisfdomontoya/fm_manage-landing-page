import React from 'react';
import FeatureList from './FeatureList';
import { featuresContent } from './content';

const MiddleSection = () => {
  return (
    <section>
			<div>
				<div>
					<h2>What's different about Manage?</h2>
					<p>Manage provides all the functionality your team needs, without the complexity. Our software is tailer-made for modern digital product teams.</p>
				</div>
				<FeatureList featureItems={ featuresContent } />
			</div>
		</section>
  );
};

export default MiddleSection;