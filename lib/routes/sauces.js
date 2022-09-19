const sauces = [
    { name: 'bbq sauce' },
    { name: 'franks' }
  ]
  
  export default {
    name: 'sauces',
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.statusCode = 200;
      res.end();
    },
    post(req, res) {
      // const sauce = { name: 'Ranch' };
      sauces.push(req.body);
      // res.write(JSON.stringify(sauces));
      res.statusCode = 200;
      res.end();
    },
    put(req, res) {
      sauces.splice(sauces.length - 1, 1, req.body);
      res.write(JSON.stringify(sauces));
      res.statusCode = 200;
      res.end();
    },
    delete(req, res) {
      res.statusCode = 204;
      res.send('no sauce for you');
      res.end();
    },
  };
  