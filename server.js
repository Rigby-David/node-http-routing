import http from 'node:http';
import dotenv from 'dotenv';
import app from './lib/app.js';

dotenv.config();

const server = http.createServer(app);

const port = process.env.APP_PORT || 8080;
const hostName = process.env.APP_HOST || 'localhost';

server.listen(port, hostName, () => {
  console.log(
    `Server listening on: ${JSON.stringify(server.address())}`
  );
});
