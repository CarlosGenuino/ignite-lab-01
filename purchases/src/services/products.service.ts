import { Product } from './../http/graphql/models/product';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import slugify from 'slugify';

interface CreateProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  findById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async hasTheSameSlug(slug: string) {
    const hasTheSameSlug = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (hasTheSameSlug) {
      return true;
    }

    return false;
  }

  async createProduct({ title }: CreateProductParams): Promise<Product> {
    const slug = slugify(title, {
      lower: true,
    });

    const hasTheSame = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (hasTheSame) {
      throw Error('Another product has the same slug!');
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }
}
