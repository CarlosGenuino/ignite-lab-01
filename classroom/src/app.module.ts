import { StudentService } from './services/student.service';
import { CourseService } from './services/course.service';
import { StudentResolver } from './graphql/resolvers/student.resolver';
import { EnrollmentResolver } from './graphql/resolvers/enrollment.resolver';
import { CourseResolver } from './graphql/resolvers/course.resolver';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { EnrollmentService } from './services/enrollment.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [
    // Resolvers
    CourseResolver,
    EnrollmentResolver,
    StudentResolver,

    //Services
    CourseService,
    EnrollmentService,
    StudentService,
  ],
})
export class AppModule {}
