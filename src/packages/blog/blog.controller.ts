import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { blogResponse, genericResponse } from '../../responses/blogResponses';
import { BlogService } from './blog.service';
import { Types } from 'mongoose';
import { blogDTO } from './blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('')
  getAllBlogs(): blogResponse[] {
    return this.blogService.getAllBlogs();
  }

  @Get(':blogId')
  getSingleBlog(@Param() id: Types.ObjectId): blogResponse {
    return this.blogService.getSingleBlog(id);
  }

  @Post('add-blog')
  addBlog(@Body() data: blogDTO): genericResponse {
    return this.blogService.addBlog(data);
  }

  @Patch()
  updateBlog(@Body() data: blogDTO): genericResponse {
    return this.blogService.updateBlog(data);
  }

  @Delete('delete/:id')
  deleteBlog(@Param() id: Types.ObjectId): genericResponse {
    return this.blogService.deleteBlog(id);
  }
}
