import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';

class PostDTO {
  @ApiPropertyOptional({ description: '帖子标题' })
  title: string;
  @ApiPropertyOptional({ description: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return [];
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  createPost(@Body() data: PostDTO) {
    return {
      success: true,
      data: data,
    };
  }
}
