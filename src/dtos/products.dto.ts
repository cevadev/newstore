/**
 * DTO para crear un producto
 */
//importamos las dependencias para hacer la validacion de parametros
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  //atributos de solo lectura
  //aplicamos isString para el atributo name
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive() //solo numero positivos como precio válido
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive() //solo numero positivo como stock válido
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  //para que una propiedad sea opciona le colocamos al final del nombre el signo ?
  //Hacemos que todos los productos sean opcionales
  /* readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string; */
}
