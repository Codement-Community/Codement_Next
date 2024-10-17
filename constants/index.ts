export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Events',
    route: '/events',
  },
  {
    label: 'Resources',
    route: '/resources',
  },
  {
    label: 'Contribute',
    route: '/contribute',
  },
  {
    label: 'Gallery',
    route: '/gallery',
  },
  {
    label: 'Team',
    route: '/team',
  },
  {
    label: 'Blogs',
    route: '/blogs',
  }
];

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
};
