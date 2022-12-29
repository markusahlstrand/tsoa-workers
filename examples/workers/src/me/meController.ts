import { Context } from 'cloudworker-router';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Middlewares,
  Request,
  Tags,
  Next,
  Example,
  Security,
} from '../../../../src';

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
  public async getUser(@Request() request: RequestWithContext): Promise<Me> {
    return request.ctx.state.user;
  }
}
