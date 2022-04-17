import { PrismaService } from './../database/prisma/prisma.service';

interface CreatePurchaseParam {
  productId: string;
  customerId: string;
}

export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  listAll() {
    return this.prisma.purchase.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async create({ customerId, productId }: CreatePurchaseParam) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error('Product not found!');
    }

    return await this.prisma.purchase.create({
      data: {
        customerId,
        productId,
      },
    });
  }
}
