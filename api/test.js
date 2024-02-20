const path = require('path');
const { createRenderHandler } = require('@modern-js/prod-server');
const { routes } = require('../dist/route.json');

module.exports = async (req, res) => {
  const route = routes[0];
  const render = createRenderHandler({
    distDir: path.join(__dirname, '../dist'),
    staticGenerate: false,
    conf: {
      server: {},
    },
  });
  console.info(render);
  const renderResult = await render({
    ctx: {
      params: {},
      pathname: '/',
      host: '',
      query: {},
      url: '/',
      cookieMap: {},
      headers: {},
      req: {},
      res: {
        set: () => {
          // ignore
        },
      },
      getReqHeader: () => undefined,
      resHasHandled: () => false,
      error: () => {
        // ignore
      },
      serverData: {
        router: {
          baseUrl: route.urlPath,
        },
      },
    },
    route: routes[0],
    runner: {
      extendSSRContext: () => {
        // empty
      },
      handleSSRFallback: () => {
        // empty
      },
    },
  });
  console.info(renderResult.contentType);
  console.info(renderResult.content);
  res.setHeader('Content-Type', renderResult.contentType);
  res.send(renderResult.content);
  // res.send('hello');
};
