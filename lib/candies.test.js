import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('POST /candies returns 200', async () => {
  await request(app)
    .post('/api/v1/candies')
    .send({ name: 'reeses', type: 'chocolate' })
    .expect(202);
  await request(app).get('/api/v1/candies').expect(200);
});

it('GET /candies returns candies', async () => {
  const { status } = await request(app).get('/api/v1/candies');

  expect(status).toBe(200);
  expect.any(String);
});

it('PUT /candies returns 202', async () => {
  await request(app).put('/api/v1/candies').expect(200);
  await request(app).get('/api/v1/candies').expect(200);
  expect((res) => {
    res.body.data[0].flavor = 'yummy';
  });
});

it('DELETE /candies returns 204', async () => {
  await request(app).delete('/api/v1/candies').expect(204);
});

it('PATCH route unknown method returns 404', async () => {
  const { text, status } = await request(app)
    .patch('/api/v1/candies')
    .send({ value: 'vegetables' });
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
