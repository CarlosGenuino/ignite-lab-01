import { ProductsService } from './../../../services/products.service';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { Query, Resolver } from '@nestjs/graphql';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }
}
