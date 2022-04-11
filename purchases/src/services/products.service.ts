import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }
}
