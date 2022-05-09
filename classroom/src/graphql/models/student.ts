import { Enrollment } from './enrollment';
import { ID } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

export class Student {
  @Field(() => ID)
  id: string;

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}
