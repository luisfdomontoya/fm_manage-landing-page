import Feature from './Feature';
import { featuresContent } from './content';
import React from 'react';
import UList from './UList';

const MiddleSection = () => {
  return (
    <section>
			<div className='container'>
				<div className='even-columns'>
					<div>
						<h2 className='fs-secondary-heading fw-bold'>
							What's different about Manage?
						</h2>
						<p>Manage provides all the functionality your team needs, without the complexity. Our software is tailer-made for modern digital product teams.</p>
					</div>
					<div>
						<UList
							className='numbered-items'
							role='list'
							aria-label='list'
						>
							{
								(featuresContent).map(item => (
									<li key={ item.id } >
										<Feature
											id={ item.id }
											title={ item.title }
											content={ item.content }
										/>
									</li>
								))
							}
						</UList>
					</div>
				</div>
			</div>
		</section>
  );
};

export default MiddleSection;