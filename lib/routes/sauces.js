const sauces = [
  {
    name: 'Barbecue',
    spice: 'low',
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {
    sauces.push(req.body);
    res.statusCode = 202;
    res.end();
  },
  put(req, res) {},
  delete(req, res) {},
};
