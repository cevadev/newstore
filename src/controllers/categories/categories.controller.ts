import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get(':categoryId/products/:productId')
    getCategoryAndProduct(
    @Param('categoryId') categoryId: String,
    @Param('productId') productId: String,
  ): String {
    return `Categoria: ${categoryId} / Producto: ${productId}`;
  }
}
