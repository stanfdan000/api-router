const cats = [
  { name: 'guy', type: 'stray' },
  { name: 'hank', type: 'indoor cat' }
]

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    cats.splice(cats.length - 1, 1, req.body);
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    res.statusCode = 204;
    res.send('no cats for you');
    res.end();
  },
};