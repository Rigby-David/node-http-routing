import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('GET returns /sauces', async () => {
  const { status } = await request(app).get('/api/v1/sauces');
  expect(status).toBe(200);
  expect.any(String);
});

it('POST /sauces returns 202 and adds new object to array', async () => {
  const { status } = await request(app)
    .post('/api/v1/sauces')
    .send({ name: 'teriyaki', spice: 'medium' });
  expect(status).toBe(202);
  await request(app).get('/api/v1/sauces');
});

it('PUT /sauces returns 200 and updates existing array', async () => {
  await request(app).put('/api/v1/sauces').expect(200);
  await request(app).get('/api/v1/sauces').expect(200);
  expect((res) => {
    res.body.data[0].pairing = 'turtle';
  });
});

it('DELETE returns 204', async () => {
  await request(app).delete('/api/v1/sauces').expect(204);
});

it('PATCH returns 404 for unknown method', async () => {
  const { text, status } = await request(app)
    .patch('/api/v1/sauces')
    .send({ value: 'red meat' });
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
