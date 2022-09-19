const cats = [
  { name: 'guy', type: 'stray' },
  { name: 'hank', type: 'indoor cat' }
]

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    cats.map((breed) => {
      breed['type'] = 'breed';
    });
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};