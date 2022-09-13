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
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 202;
    res.end();
  },
  put(req, res) {},
  delete(req, res) {},
};
