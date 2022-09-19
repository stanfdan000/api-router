import cats from "./cats";

const sauces = [
    { name: 'bbq sauce', type: 'hot' },
    { name: 'franks', type: 'mild' }
  ]
  
  export default {
    name: 'sauces',
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.statusCode = 200;
      res.end();
    },
    post(req, res) {
      sauces.push(req.body);
      res.statusCode = 200;
      res.end();
    },
    put(req, res) {
      sauces.map((thickness) => {
        thickness['name'] = 'thickness';
      });
      res.statusCode = 200;
      res.end();
    },
    delete(req, res) {
      sauces.pop();
      res.statusCode = 204;
      res.end();
    },
  };
  