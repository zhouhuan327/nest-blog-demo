import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';
import { PostModel } from './post.module';

class PostDTO {
  @ApiPropertyOptional({ description: '帖子标题', example: '一个标题' })
  title: string;
  @ApiPropertyOptional({ description: '帖子内容', example: '帖子内容' })
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
  async createPost(@Body() post: PostDTO) {
    await PostModel.create(post);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  async detail(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() post: PostDTO) {
    await PostModel.findByIdAndUpdate(id, post);
    return {
      success: true,
    };
  }
  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async deletePost(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}
