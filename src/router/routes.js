import Home from '@/views/Home';
import Landing from '@/views/Landing';
import Projects from '@/views/Projects';
import Project from '@/views/Project';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing,
    meta: {
      title: 'Ryan Hughes',
      metaTags: [
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0',
        }
      ],
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: Project,
  },
];

export default routes;
