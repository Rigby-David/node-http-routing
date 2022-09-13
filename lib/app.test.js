import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('POST /cats returns 200', async () => {
  await request(app)
    .post('/api/v1/cats')
    .send({ name: 'hildegarde', type: 'witch' })
    .expect(202);
  await request(app).get('/api/v1/cats').expect(200);
});

it('GET /cats returns cats', async () => {
  const { status } = await request(app).get('/api/v1/cats');

  expect(status).toBe(200);
  expect.any(String);
});
