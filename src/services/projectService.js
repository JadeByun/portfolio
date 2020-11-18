const projects = [
  {
    id: 1,
    title: 'Scanning Service Tool',
    skills: ['Django REST Framework', 'PostgreSQL'],
    year: 2019,
    month: 6,
    img: './img/portfolio/SST.png',
    links: [{ title: 'See the reference', button: 'PDF', url: '' }],
  },
  {
    id: 2,
    title: 'Restaurant Website',
    skills: ['HTML', 'Sass', 'JavaScript', 'PHP', 'WordPress'],
    year: 2020,
    month: 4,
    img: './img/portfolio/pho-1.jpg',
    links: [
      { title: 'See the source code', button: 'Github', url: '' },
      { title: 'Go to the website', button: 'phou.ca', url: 'http://phou.ca' },
    ],
  },
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((m) => m._id === id);
}
