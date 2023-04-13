const app = require('./app');

const port = process.env.PORT || 3000;

const index = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

module.exports = index;
