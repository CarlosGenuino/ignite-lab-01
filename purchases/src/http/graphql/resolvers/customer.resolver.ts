import { PurchaseService } from './../../../services/purchases.service';
import { CustomersService } from './../../../services/customers.service';
import { AuthUser } from './../../auth/current-user';
import { AuthorizationGuard } from './../../auth/authorization.guard';
import { UseGuards } from '@nestjs/common';
import { Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Customer } from '../models/customer';
import { currentUser } from 'src/http/auth/current-user';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customers: CustomersService,
    private purchaseService: PurchaseService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Customer)
  me(@currentUser() user: AuthUser) {
    return this.customers.findCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchaseService.listAllByCustomerId(customer.id);
  }
}
