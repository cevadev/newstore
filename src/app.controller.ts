import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  newEndPoint(): String {
    return `Usted debe autenticarse`;
  }

  @Get('/portal/')
  portal(): String {
    return `Usted está dentro del portal... Bienvenido`;
  }

  //definimos primero el endpoint no dinamico para que no entre en conflico con el endpoint dinamico products/:id
  @Get('products/filter')
  productsFiltered(): String {
    return `Product filtered`;
  }

  @Get('/products/:id')
  getProduct(@Param('id') productId): String {
    return `El producto es ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 50,
    @Query('brand') brand: String,
  ): String {
    //de-construimos el objeto
    //const { limit, offset } = pagingOpts;
    return `product limit=> ${limit} and offset=> ${offset} whit brand: ${brand}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategoryAndProduct(
    @Param('categoryId') categoryId: String,
    @Param('productId') productId: String,
  ): String {
    return `Categoria: ${categoryId} / Producto: ${productId}`;
  }
}
