import url from 'url';
import https from 'https';

export function listen(app, options, callback) {
  if (!callback) {
    [options, callback] = [{}, options];
  }

  let {
    protocol,
    hostname: host,
    port,
    pathname,
  } = url.parse(process.env.APP_URL || 'http://localhost:0');

  host = host || 'localhost';

  if (port === null) {
    if (protocol === 'http:') {
      port = 80;
    } else if (protocol === 'https:') {
      port = 443;
    }
  }
  port = port || 0;

  let server;

  if (protocol === 'https:') {
    server = https.createServer(options, app);
  } else {
    server = app;
  }

  if (protocol === 'unix:') {
    server.listen(pathname, callback);
  } else {
    server.listen(port, host, callback);
  }
}
