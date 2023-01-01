import { Controller, Get, Route, Tags, FormField, Post } from '../../../../src';

import { AuthParams } from './auth';

@Route('auth')
@Tags('auth')
export class AUthController extends Controller {
  @Post('login')
  /**
   * Just passes back the content of the jwt
   */
  public async login(@FormField('email') email: string): Promise<string> {
    return email;
  }
}
