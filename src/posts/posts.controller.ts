import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';
import { PostModel } from './post.module';

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
  async index() {
    return await PostModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  createPost(@Body() data: PostDTO) {
    return {
      success: true,
      data: data,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  detail(@Param('id') id: string) {
    return { id: id };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: PostDTO) {
    return {
      success: true,
    };
  }
  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  deletePost(@Param('id') id: string) {
    return {
      success: true,
    };
  }
}
