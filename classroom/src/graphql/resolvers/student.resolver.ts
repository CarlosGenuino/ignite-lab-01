import { Student } from './../models/student';
import { Resolver } from '@nestjs/graphql';

@Resolver(() => Student)
export class StudentResolver {}
