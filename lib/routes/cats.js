const cats = [
  {
    name: 'Frenchie',
    cuteness: 'Super',
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
