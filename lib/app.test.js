import request from 'supertest';
import app from './app.js';


it.skip('get / candies returns 200', async () => {
  await request(app).get('/api/v1/candies').expect(200);
  expect.any(String);
});

it.skip('post / candies returns 200', async () => {
  await request(app)
  .post('/api/v1/candies')
  .send({ yumness: '12', name: 'kluncker bar' })
  .expect(200);  
  await request(app).get('/api/v1/candies').expect(200);
});

it.skip('put / candies returns 200', async () => {
  await request(app).put('/api/v1/candies').expect(200);
  await request(app).get('/api/v1/candies').expect(200);
  expect((res) => {
    res.body.data[0].topPick = 'sweets';
  });
});

it.skip('delete / candies returns 204', async () => {
  await request(app).delete('/api/v1/candies').expect(204);
});





it('get / cats returns 200', async () => {
  await request(app).get('/api/v1/cats').expect(200);
  expect.any(String);
});

it('post / cats returns 200', async () => {
  await request(app)
  .post('/api/v1/cats')
  .send({ name: 'kyle', type: 'farm' })
  .expect(200);  
  await request(app).get('/api/v1/candies').expect(200);
});

  



