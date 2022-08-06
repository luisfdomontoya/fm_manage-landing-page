import React from 'react';
import Button from './Button';

const BottomSection = () => {
  return (
    <section className='cta bg-primary-400 text-neutral-100'>
			<div className="container">
				<div className='even-columns'>
					<div>
						<p className='fs-secondary-heading fw-bold'>
							Simplify how your team works today.
						</p>
					</div>
					<div>
						<Button
							text='Get Started'
							className={'button inverted'}
							dataType='inverted'
						/>
					</div>
				</div>
			</div>
		</section>
  );
};

export default BottomSection;