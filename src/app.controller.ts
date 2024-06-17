import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<any> {
    return this.appService.getHello();
  }

  // @Get('users/data')
  // getUser(): string {
  //   return this.appService.getHello();
  // }

  // @Get('users/data/:id')
  // async getUserById(@Param('id') id: string): Promise<any> {
  //   console.log(`id`, id);
  //   return await this.appService.getHello();
  // }
}
