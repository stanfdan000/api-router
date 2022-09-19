import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  // const httpMethod = req.method.toLowerCase();
  const urlSegments = req.url.split('/')
  if(urlSegments.length && urlSegments[1] === 'api') {
    req.body = await bodyParser(req);
    const resourcePath = routes[urlSegments[urlSegments.length - 1]];
    if(resourcePath == null) {
      notFound(req, res);
      return;
    }


    const route = resourcePath[req.method.toLowerCase()];
    if(route == null) {
      notFound(req, res);
      return;
    }

    route(req, res);
    return;
  }
  notFound(req, res);
}
