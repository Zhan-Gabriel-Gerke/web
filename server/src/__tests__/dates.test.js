const request = require('supertest');
const app = require('../index');

describe('Dates API', () => {
  test('GET /api/dates should return array of dates', async () => {
    const response = await request(app).get('/api/dates');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Each date should have id, date, and description', async () => {
    const response = await request(app).get('/api/dates');

    response.body.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('description');
    });
  });

  test('GET /health should return OK status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
