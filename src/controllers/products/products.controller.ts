import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 50,
    @Query('brand') brand: String,
  ) {
    return this.productsService.findAll();
    //de-construimos el objeto
    //const { limit, offset } = pagingOpts;
    /* return {
      message: `product limit=> ${limit} and offset=> ${offset} whit brand: ${brand}`,
    }; */
  }

  //definimos primero el endpoint no dinamico para que no entre en conflico con el endpoint dinamico products/:id
  @Get('filter')
  productsFiltered() {
    return {
      message: `Product filtered`,
    };
  }

  @Get(':productId')
  //indicamos que el request get nos responda con un Status Accepted = 202
  //@HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    //+productId -> convertimos en numero productId
    return this.productsService.findOne(productId);
    /* return {
      message: `El producto es ${productId}`,
    }; */
  }

  //uso metodo POST
  @Post()
  createProduct(@Body() payload: any) {
    return this.productsService.create(payload);
    /* return {
      message: 'accion de crear',
      //hacemos que el payload sea parte de la respuesta
      data: payload,
    }; */
  }

  //uso metodo PUT para modificar completamente un producto
  @Put(':productId')
  //payload -> es el cuerpo de todo lo que se va a editar
  update(@Param('productId') productId: String, @Body() payload: any) {
    return this.productsService.update(+productId, payload);
    //comprobamos si estamos recibiendo la informacion
    /* return {
      id: productId,
      data: payload,
    }; */
  }

  //uso del metodo delete para eliminar un registro en una BD
  @Delete(':productId')
  delete(@Param('productId') productId: String) {
    return this.productsService.remove(+productId);
  }
}
