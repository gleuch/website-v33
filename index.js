const express = require('express');
const helmet = require('helmet');
const next = require('next');
const path = require('path');

const redirects = require('./src/redirects');
const routes = require('./src/routes');

const dev = process.env.NODE_ENV;
const port = parseInt(process.env.PORT || 3000, 10);

// Load express
const server = express();

// Load next
const app = next({ dev, dir: './src' });
const appHandler = routes.getRequestHandler(app);

// Load security elpers
server.use(helmet());
server.use(helmet.referrerPolicy({ policy: 'origin-when-cross-origin' }));

// Access static files
server.use(express.static(path.join(__dirname, './static')));

// Prepare and install routes
app.prepare().then(() => {
  // Route redirects
  redirects.forEach(({
    from, to, statusCode = 301, method = 'get',
  }) => {
    server[method](from, (_, res) => res.redirect(statusCode, to));
  });

  // All routes
  server.use(appHandler);

  // Start server
  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Running on http://localhost:${port}`);
  })
}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
