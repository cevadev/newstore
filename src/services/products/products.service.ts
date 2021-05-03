import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';
@Injectable()
export class ProductsService {
  private counterId = 3;
  //creamos un array de objetos
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Producto 1 de origen Chino',
      price: 50,
      stock: 10,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Producto 2 de origen EEUU',
      price: 500,
      stock: 20,
      image: '',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Producto 1 de origen British',
      price: 5000,
      stock: 30,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      //si no se encuentra el producto, lanzamos un error 404 not found
      throw new NotFoundException(`The product with id ${id} not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    //buscamos la posicion del producto en el array
    const index = this.products.findIndex((item) => {
      item.id === id;
    });

    this.products[index] = {
      //hacemos u nmerge, tomamos el product recuperado y sobreescribimos sus datos con el payload que viene del cliente
      //spread operator
      ...product,
      ...payload,
    };

    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
