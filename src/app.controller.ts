import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(
    @Query('hero1') hero1,
    @Query('hero2') hero2,
  ): Promise<string> {
    return await this.appService.getHello(hero1, hero2);
  }
}
