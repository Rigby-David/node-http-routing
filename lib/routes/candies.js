const candies = [
  {
    name: 'Snickers',
    type: 'Chocolate',
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 202;
    res.end();
  },
  put(req, res) {
    candies.forEach((candy) => {
      candy['flavor'] = 'yummy';
      candies.push(req.body);
      res.statusCode = 200;
      res.end();
    });
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};
