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
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
