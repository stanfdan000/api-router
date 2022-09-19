import request from 'supertest';
import app from './app.js';
import candies from './routes/candies.js';

it('get / candies returns 200', async () => {
  await request(app).get('/api/v1/candies').expect(200);
  expect.any(candies);
});

it('post / candies returns 200', async () => {
  await request(app).get('/api/v1/candies').expect(200);
  expect.any(String);
});