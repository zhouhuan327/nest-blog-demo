import { prop, getModelForClass } from '@typegoose/typegoose';

export class Post {
  @prop()
  title: string;
  @prop()
  content: string;
}

export const PostModel = getModelForClass(Post);
