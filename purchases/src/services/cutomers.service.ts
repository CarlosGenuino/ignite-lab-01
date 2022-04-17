import { PrismaService } from '../database/prisma/prisma.service';

export class CurtomersService {
  constructor(private prisma: PrismaService) {}

  findCustomerByAuthUserId(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        authUserId: id,
      },
    });
  }
}
