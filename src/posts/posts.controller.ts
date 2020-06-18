import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index(): Array<any> {
    return [
      {
        id: 4,
      },
    ];
  }
}
