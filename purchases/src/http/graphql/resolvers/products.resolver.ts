import { CreateProductInput } from './../inputs/create-product-input';
import { ProductsService } from './../../../services/products.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
