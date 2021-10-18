import { prop, getModelForClass } from '@typegoose/typegoose';
export class BlogSchema {
  @prop({ trim: true })
  title: string;

  @prop({ trim: true })
  content: string;

  @prop({ default: Date.now })
  dateUpdated: Date;

  @prop({ trim: true })
  createdBy: string;
}

export const blogModel = getModelForClass(BlogSchema, {
  schemaOptions: { collection: 'Blog', minimize: true, timestamps: true },
});
