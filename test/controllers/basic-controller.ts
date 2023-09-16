import {
  Controller,
  Delete,
  Get,
  Post,
  Path,
  Body,
  Patch,
  Put,
  Route,
} from '@tsoa/runtime';

@Route('basic')
export class BasicController extends Controller {
  @Get('')
  public async basicGet() {
    return 'OK';
  }

  @Get('{id}')
  public async basicGetWithParam(@Path('id') id: string) {
    return id;
  }

  @Post('')
  public async basicPost(@Body() body: string) {
    return body;
  }

  @Put('')
  public async basicPut(@Body() body: string) {
    return body;
  }

  @Patch('')
  public async basicPatch(@Body() body: string) {
    return body;
  }

  @Delete('')
  public async basicDelete() {
    return 'OK';
  }
}
