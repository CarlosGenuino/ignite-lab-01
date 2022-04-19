import { CustomersService } from './../../../services/customers.service';
import { AuthUser } from './../../auth/current-user';
import { Product } from './../models/product';
import { AuthorizationGuard } from './../../auth/authorization.guard';
import { PurchaseService } from './../../../services/purchases.service';
import { Purchase } from './../models/purchase';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { currentUser } from 'src/http/auth/current-user';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private service: PurchaseService,
    private products: ProductsService,
    private customers: CustomersService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.service.listAll();
  }

  @ResolveField(() => Product)
  product(@Parent() purchase: Purchase) {
    return this.products.findById(purchase.productId);
  }

  @Mutation(() => Purchase)
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @Args('data') data: CreatePurchaseInput,
    @currentUser() user: AuthUser,
  ) {
    let customer = await this.customers.findCustomerByAuthUserId(user.sub);

    if (!customer) {
      customer = await this.customers.createCustomer({ authUserId: user.sub });
    }

    return this.service.create({
      productId: data.productId,
      customerId: customer.id,
    });
  }
}
