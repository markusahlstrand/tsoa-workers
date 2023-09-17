import {
  Controller,
  Delete,
  Get,
  Post,
  Path,
  Body,
  Patch,
  Put,
  Query,
  Route,
} from '@tsoa/runtime';

@Route('basic')
export class BasicController extends Controller {
  @Get('')
  public async basicGet() {
    return 'OK';
  }

  @Get('param/{id}')
  public async basicGetWithParam(@Path('id') id: string) {
    return id;
  }

  @Get('query')
  public async basicGetWithQuery(@Query('foo') foo?: string) {
    return foo || 'No foo';
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
