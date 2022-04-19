import { Customer } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

export interface CreateCustomer {
  authUserId: string;
}

export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findCustomerByAuthUserId(id: string): Promise<Customer> {
    return this.prisma.customer.findUnique({
      where: {
        authUserId: id,
      },
    });
  }

  createCustomer({ authUserId }: CreateCustomer): Promise<Customer> {
    return this.prisma.customer.create({
      data: {
        authUserId,
      },
    });
  }
}
