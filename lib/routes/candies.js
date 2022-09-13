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
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
