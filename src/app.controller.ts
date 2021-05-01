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
}
