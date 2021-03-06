import { CustomersResolver } from './graphql/resolvers/customer.resolver';
import { CustomersService } from './../services/customers.service';
import { PurchaseService } from './../services/purchases.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { ProductsService } from './../services/products.service';
import { ProductsResolver } from './graphql/resolvers/products.resolver';

import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    PurchasesResolver,
    PurchaseService,
    CustomersService,
    CustomersResolver,
  ],
})
export class HttpModule {}
