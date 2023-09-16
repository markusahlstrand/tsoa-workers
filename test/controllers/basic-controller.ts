import { Controller, Get, Route } from '@tsoa/runtime';

@Route('basic')
export class BasicController extends Controller {
  @Get('')
  public async basicGet() {
    console.log('got here');
    return 'OK';
  }
}
