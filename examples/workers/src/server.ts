import { Router, bodyparser } from 'cloudworker-router';
import { Hono, Context } from 'hono'

import { Env, Bindings } from './models/Env';
import { RegisterRoutes } from '../build/routes';
import swagger from '../build/swagger.json';
import packageJson from '../package.json';
import swaggerUi from './routes/swagger-ui';
import renderOauthRedirectHtml from './routes/oauth2-redirect';

// export const app = new Router<Env>();
export const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (ctx) => ctx.json({
  name: packageJson.name,
  version: packageJson.version,
}));

app.get('/spec', async (ctx) => ctx.json(swagger));

app.get('/docs', swaggerUi);
app.get('/oauth2-redirect.html', renderOauthRedirectHtml);

// app.use(bodyparser);

RegisterRoutes(app);

export default app;