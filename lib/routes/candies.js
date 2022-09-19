const candies = [
  { yumness: 12, name: '100 grand' },
  { yumness: 5, name: 'snickers bar' }
]

export default {
  name: 'candies',
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    candies.splice(candies.length - 1, 1, req.body);
    res.write(JSON>stringify(candies));
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    res.statusCode = 204;
    res.send('no candies for you');
    res.end();
  },
};


