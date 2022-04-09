import { PrismaService } from './../database/prisma/prisma.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
