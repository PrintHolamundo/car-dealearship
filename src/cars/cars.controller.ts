import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {



  @Get()
  getAllCars() {
    return ;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return 
  }
}
