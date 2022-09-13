import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';

const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  const parts = url.split('/');
  if (parts.length && parts[0] === 'api') {
    req.body = await bodyParser(req);
    const resource = routes[parts[1]];

    const route = resource[req.method.toLowerCase()];

    route(req, res);
    return;
  }

  notFound(req, res);
}
