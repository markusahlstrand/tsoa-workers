import { Router, bodyparser } from 'cloudworker-router';

import { Env } from './models/Env';
import { RegisterRoutes } from '../build/routes';
import swagger from '../build/swagger.json';
import packageJson from '../package.json';
import swaggerUi from './routes/swagger-ui';
import renderOauthRedirectHtml from './routes/oauth2-redirect';

export const app = new Router<Env>();

app.get('/', async () => {
  return new Response(
    JSON.stringify({
      name: packageJson.name,
      version: packageJson.version,
    }),
  );
});

app.get('/spec', async () => {
  return new Response(JSON.stringify(swagger));
});

app.get('/docs', swaggerUi);
app.get('/oauth2-redirect.html', renderOauthRedirectHtml);

app.use(bodyparser);

RegisterRoutes(app);
