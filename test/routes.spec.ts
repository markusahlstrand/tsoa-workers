import * as wrangler from 'wrangler';

describe('routes', () => {
  let worker;

  beforeEach(async () => {
    worker = await wrangler.unstable_dev('test/app.ts', {});
  });

  afterEach(() => {
    worker.stop();
  });

  describe('raw test', () => {
    it('should should return a raw hono request', async () => {
      const response = await worker.fetch('/hono');

      expect(response.status).toBe(200);

      const body = await response.text();
      expect(body).toBe('Hono router');
    });
  });

  describe('basic test', () => {
    it('should should return get request', async () => {
      const response = await worker.fetch('/basic');

      expect(response.status).toBe(200);

      const body = await response.text();
      expect(body).toBe('OK');
    });
  });
});
