import { Router, Context, Next } from 'cloudworker-router';
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
  Tags,
} from '../../../../src';
// } from 'tsoa';
import { User } from './user';
import { UsersService, UserCreationParams } from './usersService';

async function corsMiddleware(controller: Controller, next: Next) {
  controller.setHeader('access-control-allow-origin', '*');
  return next();
}

@Route('users')
@Tags('users')
export class UsersController extends Controller {
  @Get('{userId}')
  @Middlewares(corsMiddleware)
  public async getUser(
    @Path() userId: number,
    @Query() name?: string,
  ): Promise<User> {
    return new UsersService().get(userId, name);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<void> {
    this.setStatus(201);
    new UsersService().create(requestBody);
    return;
  }
}
