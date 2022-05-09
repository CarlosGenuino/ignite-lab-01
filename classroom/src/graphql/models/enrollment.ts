import { Course } from './course';
import { Student } from './student';
import { ID } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

export class Enrollment {
  @Field(() => ID)
  id: string;

  @Field(() => Student)
  student: Student;

  studentId: string;

  @Field(() => Course)
  course: Course;

  couseId: string;

  @Field(() => Date, { nullable: true })
  canceledAt: Date;

  @Field(() => Date)
  createdAt: Date;
}
