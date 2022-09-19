import request from 'supertest';
import app from './app.js';


it('get / candies returns 200', async () => {
  await request(app).get('/api/v1/candies').expect(200);
  expect.any(String);
});

it('post / candies returns 200', async () => {
  await request(app)
  .post('/api/v1/candies')
  .send({ yumness: '12', name: 'kluncker bar' })
  .expect(200);  
  await request(app).get('/api/v1/candies').expect(200);
});

it('put / candies returns 200', async () => {
  await request(app).put('/api/v1/candies').expect(200);
  await request(app).get('/api/v1/candies').expect(200);
  expect((res) => {
    res.body.data[0].topPick = 'sweets';
  });
});

it('delete / candies returns 204', async () => {
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
  await request(app).get('/api/v1/cats').expect(200);
});

it('put / cats returns 200', async () => {
  await request(app).put('/api/v1/cats').expect(200);
  await request(app).get('/api/v1/cats').expect(200);
  expect((res) => {
    res.body.data[0].type = 'breed';
  });
});

it('delete / cats returns 204', async () => {
  await request(app).delete('/api/v1/candies').expect(204);
});





it('get / sauces returns 200', async () => {
  await request(app).get('/api/v1/sauces').expect(200);
  expect.any(String);
});

it('post / sauces returns 200', async () => {
  await request(app)
  .post('/api/v1/sauces')
  .send({ name: 'kyle', type: 'farm' })
  .expect(200);  
  await request(app).get('/api/v1/sauces').expect(200);
});

it('put / sauces returns 200', async () => {
  await request(app).put('/api/v1/sauces').expect(200);
  await request(app).get('/api/v1/sauces').expect(200);
  expect((res) => {
    res.body.data[0].name = 'thickness';
  });
});

it('delete / sauces returns 204', async () => {
  await request(app).delete('/api/v1/sauces').expect(204);
});

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad CRUD', async () => {
  const { text, status } = await request(app).patch('/api/v1/cats');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});



  



