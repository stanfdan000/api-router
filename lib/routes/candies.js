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
    candies.map((sweets) => {
      sweets['topPick'] = 'sweets';
    });
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};


