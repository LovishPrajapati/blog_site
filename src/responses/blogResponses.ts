import { BlogSchema } from 'src/entity/Blog/blog.entity';
import { generic } from 'src/type';

export type blogResponse = BlogSchema;

export interface genericResponse extends generic {
  data: blogResponse;
}
