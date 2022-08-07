import React from 'react';
import Button from './Button';

const BottomSection = () => {
  return (
    <section className='cta | text-neutral-100 padding-block-700 bg-accent-400' style={{border: '1px solid blue'}}>
			<div className='container'>
				<div className='even-columns'>
					<div>
						<p className='fs-secondary-heading fw-bold'>
							Simplify how your team works today.
						</p>
					</div>
					<div>
						<Button
							className={'button inverted'}
							dataType='inverted'
						>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</section>
  );
};

export default BottomSection;