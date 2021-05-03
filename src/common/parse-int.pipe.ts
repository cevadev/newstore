import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    //hacemos el parse
    const val = parseInt(value, 10);
    //valimos que el valor parseado sea un numero
    if (isNaN(val)) {
      throw new BadRequestException(`${val} is not a number`);
    }
    //si todo sale bien, retornamos el valor transformado de string a number
    return val;
  }
}
