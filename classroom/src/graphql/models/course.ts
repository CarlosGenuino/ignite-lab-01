import { ID } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

export class Course {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  slug: string;
}
