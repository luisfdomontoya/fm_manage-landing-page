const navContent = [
	{
    id: 1,
    title: 'Pricing'
  },
	{
    id: 2,
    title: 'Product'
  },
	{
    id: 3,
    title: 'About Us'
  },
	{
    id: 4,
    title: 'Careers'
  },
	{
    id: 5,
    title: 'Community'
  }
];

// const socialContent = [
// 	{
//     id: 1,
//     name: 'facebook',
//     url: 'https://www.facebook.com/',
//     icon: './images/icon-facebook.svg'
//   },
// 	{
//     id: 2,
//     name: 'youtube',
//     url: 'https://www.youtube.com/',
//     icon: './images/icon-youtube.svg'
//   },
// 	{
//     id: 3,
//     name: 'twitter',
//     url: 'https://twitter.com/',
//     icon: './images/icon-twitter.svg'
//   },
// 	{
//     id: 4,
//     name: 'pinterest',
//     url: 'https://pinterest.com/',
//     icon: './images/icon-pinterest.svg'
//   },
// 	{
//     id: 5,
//     name: 'instagram',
//     url: 'https://www.instagram.com/',
//     icon: './images/iconInstagram.svg'
//   }
// ];

const socialContent = [
	{
    id: 1,
    name: 'facebook',
    url: 'https://www.facebook.com/',
    icon: require('./images/icon-facebook.svg').default
  },
	{
    id: 2,
    name: 'youtube',
    url: 'https://www.youtube.com/',
    icon: require('./images/icon-youtube.svg').default
  },
	{
    id: 3,
    name: 'twitter',
    url: 'https://twitter.com/',
    icon: require('./images/icon-twitter.svg').default
  },
	{
    id: 4,
    name: 'pinterest',
    url: 'https://pinterest.com/',
    icon: require('./images/icon-pinterest.svg').default
  },
	{
    id: 5,
    name: 'instagram',
    url: 'https://www.instagram.com/',
    icon: require('./images/iconInstagram.svg').default
  }
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
    image: require('./images/avatar-anisha.png'),
    name: 'Anisha Li',
    content: '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."'
  },
  {
    id: 2,
    image: require('./images/avatar-ali.png'),
    name: 'Ali Bravo',
    content: '"We have been able to cancel so many other subscriptions since using Manage. there is no more cross-channel confusion and everyone is much more focused."'
  },
  {
    id: 3,
    image: require('./images/avatar-richard.png'),
    name: 'Richard Watts',
    content: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!."'
  },
  {
    id: 4,
    image: require('./images/avatar-shanai.png'),
    name: 'Shanai Gough',
    content: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."'
  }
];

export {navContent, featuresContent, testimonialContent, socialContent};