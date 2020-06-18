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
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Posts } from './post.module';
class PostDTO {
  @ApiPropertyOptional({ description: '帖子标题', example: '一个标题' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiPropertyOptional({ description: '帖子内容', example: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(@InjectModel(Posts) private readonly postModel) {}
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  async index() {
    return await this.postModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async createPost(@Body() post: PostDTO) {
    await this.postModel.create(post);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() post: PostDTO) {
    await this.postModel.findByIdAndUpdate(id, post);
    return {
      success: true,
    };
  }
  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async deletePost(@Param('id') id: string) {
    await this.postModel.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}
