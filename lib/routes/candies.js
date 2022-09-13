const candies = [
  { yumness: 12, name: '100 grand' },
  { yumness: 5, name: 'snickers bar' }
]

export default {
  name: 'candies',
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 204
  },
  put(req, res) {

  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('no candies for you');
    res.end();
  },
};
