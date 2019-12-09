import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) { // extension for combine jwt and graphql
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}