const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add({ name: 'home', pattern: '/', page: 'home' });
routes.add({ name: 'about', pattern: '/about', page: 'about' });
