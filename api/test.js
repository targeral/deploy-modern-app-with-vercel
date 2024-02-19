const path = require('path');
const { Server } = require('@modern-js/prod-server');

module.exports = async (req, res) => {
  const s = new Server({ pwd: path.resolve('..') });
  const a = await s.init();
  return a.render(req, res);
};
