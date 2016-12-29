# server-listen

Utility to listen for a server.

## Installation

```
npm install server-listen -S
```

## Usage

``` javascript
import { listen } from 'server-listen';

const app = express();
listen(app);
```

## Environment Variables

- `APP_URL`
    - This variable defines a schema, a host, a port and other options to listen.
    - Default value is `http://localhost:0`.

## License

MIT
