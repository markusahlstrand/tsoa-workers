import { Hono } from 'hono';
import { RegisterRoutes } from './build/routes';

const app = new Hono();

app.get('/hono', async (ctx) => ctx.text('Hono router'));

RegisterRoutes(app);

export default app;
