import { Course } from './../models/course';
import { Resolver } from '@nestjs/graphql';

@Resolver(() => Course)
export class CourseResolver {}
