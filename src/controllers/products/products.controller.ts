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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 50,
    @Query('brand') brand: String,
  ) {
    //de-construimos el objeto
    //const { limit, offset } = pagingOpts;
    return {
      message: `product limit=> ${limit} and offset=> ${offset} whit brand: ${brand}`,
    };
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
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: number) {
    return {
      message: `El producto es ${productId}`,
    };
  }

  //uso metodo POST
  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'accion de crear',
      //hacemos que el payload sea parte de la respuesta
      data: payload,
    };
  }

  //uso metodo PUT para modificar completamente un producto
  @Put(':productId')
  //payload -> es el cuerpo de todo lo que se va a editar
  update(@Param('productId') productId: number, @Body() payload: any) {
    //comprobamos si estamos recibiendo la informacion
    return {
      id: productId,
      data: payload,
    };
  }

  //uso del metodo delete para eliminar un registro en una BD
  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return `Product deleted: ${productId}`;
  }
}
