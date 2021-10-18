import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { blogResponse, genericResponse } from 'src/responses/blogResponses';
import { blogDTO } from './blog.dto';

@Injectable()
export class BlogService {
  getAllBlogs(): blogResponse[] {
    return [
      {
        title: 'Example Title',
        content: 'Example content',
        dateUpdated: new Date(),
        createdBy: 'lovish',
      },
    ];
  }

  getSingleBlog(id: Types.ObjectId): blogResponse {
    return {
      title: `Example Title${id}`,
      content: 'Example content',
      dateUpdated: new Date(),
      createdBy: 'lovish',
    };
  }

  addBlog(data: blogDTO): genericResponse {
    return {
      success: true,
      message: 'blog added',
      data,
    };
  }

  updateBlog(data: blogDTO): genericResponse {
    return {
      success: true,
      message: 'blog updated',
      data,
    };
  }

  deleteBlog(id: Types.ObjectId): genericResponse {
    return {
      success: true,
      message: `blog deleted${id}`,
      data: {
        title: `Example Title${id}`,
        content: 'Example content',
        dateUpdated: new Date(),
        createdBy: 'lovish',
      },
    };
  }
}
