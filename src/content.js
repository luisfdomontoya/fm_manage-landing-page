import ali from './images/avatar-ali.png';
import anisha from './images/avatar-anisha.png';
import richard from './images/avatar-richard.png';
import shanai from './images/avatar-shanai.png';

const navContent = [
	{id: 1, title: 'Pricing'},
	{id: 2, title: 'Product'},
	{id: 3, title: 'About Us'},
	{id: 4, title: 'Careers'},
	{id: 5, title: 'Community'}
];

const featuresContent = [
  {
    id: 1,
    title: 'Track company-wide progress',
    content: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the biffer pricture again.'
  },
  {
    id: 2,
    title: 'Advanced built-in reports',
    content: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
  },
  {
    id: 3,
    title: 'Everything you need in one place',
    content: 'Stop jumping from one service to another to communicate, store files, track and share documents. Manage offers an all-in-one team productivity solution.'
  }
];

const testimonialContent = [
    {
      id: 1,
			image: anisha,
			name: 'Anisha Li',
			content: '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."'
    },
		{
      id: 2,
			image: ali,
			name: 'Ali Bravo',
			content: '"We have been able to cancel so many other subscriptions since using Manage. there is no more cross-channel confusion and everyone is much more focused."'
    },
		{
      id: 3,
			image: richard,
			name: 'Richard Watts',
			content: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!."'
    },
		{
      id: 4,
			image: shanai,
			name: 'Shanai Gough',
			content: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."'
    }
];

export {navContent, featuresContent, testimonialContent};