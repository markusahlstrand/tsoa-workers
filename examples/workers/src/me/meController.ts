import { Context } from 'cloudworker-router';
import {
  Controller,
  Get,
  Route,
  Request,
  Tags,
  Security,
  Header,
} from '@tsoa/runtime';

import { Me } from './me';

type RequestWithContext = Request & {
  ctx: Context;
};

@Route('me')
@Tags('me')
export class MeController extends Controller {
  @Get('')
  @Security('oauth2', ['openid email'])
  /**
   * Just passes back the content of the jwt
   */
  public async getUser(
    @Request() request: RequestWithContext,
    @Header('x-test') testHeader: string,
  ): Promise<Me> {
    console.log(testHeader);
    return request.ctx.state.user;
  }
}
