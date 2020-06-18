import { prop } from '@typegoose/typegoose';

export class Posts {
  @prop()
  title: string;
  @prop()
  content: string;
}
