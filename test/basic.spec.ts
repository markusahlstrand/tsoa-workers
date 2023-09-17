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

      const body = await response.text();
      expect(body).toBe('OK');
      expect(response.status).toBe(200);
    });

    it('should should return the body from a post request', async () => {
      const response = await worker.fetch('/basic', {
        method: 'POST',
        body: 'test',
        headers: {
          'content-type': 'text/plain',
        },
      });

      const body = await response.text();
      expect(body).toBe('test');
      expect(response.status).toBe(200);
    });

    it('should should return the body from a put request', async () => {
      const response = await worker.fetch('/basic', {
        method: 'PUT',
        body: 'test',
        headers: {
          'content-type': 'text/plain',
        },
      });

      const body = await response.text();
      expect(body).toBe('test');
      expect(response.status).toBe(200);
    });

    it('should should return the body from a patch request', async () => {
      const response = await worker.fetch('/basic', {
        method: 'PATCH',
        body: 'test',
        headers: {
          'content-type': 'text/plain',
        },
      });

      const body = await response.text();
      expect(body).toBe('test');
      expect(response.status).toBe(200);
    });

    it('should should return a string from a delete request', async () => {
      const response = await worker.fetch('/basic', {
        method: 'DELETE',
      });

      const body = await response.text();
      expect(body).toBe('OK');
      expect(response.status).toBe(200);
    });
  });

  describe('path parameters', () => {
    it('should fetch a string from the path', async () => {
      const response = await worker.fetch('/basic/param/test');

      const body = await response.text();
      expect(body).toBe('test');
      expect(response.status).toBe(200);
    });
  });

  describe('query parameters', () => {
    it('should fetch a string from the querystring', async () => {
      const response = await worker.fetch('/basic/query?foo=bar');

      const body = await response.text();
      expect(body).toBe('bar');
      expect(response.status).toBe(200);
    });

    it('should return undefined fo a non exisitng querystring', async () => {
      const response = await worker.fetch('/basic/query');

      const body = await response.text();
      expect(body).toBe('No foo');
      expect(response.status).toBe(200);
    });
  });
});
