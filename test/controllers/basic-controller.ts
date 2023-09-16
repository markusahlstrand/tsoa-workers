import { Controller, Get, Post, Body, Route } from '@tsoa/runtime';

@Route('basic')
export class BasicController extends Controller {
  @Get('')
  public async basicGet() {
    return 'OK';
  }

  @Post('')
  public async basicPost(@Body() body?: string) {
    return body;
  }
}
