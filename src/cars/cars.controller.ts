import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsServise: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsServise.findAll();
  }

  @Get(':id')
  getCarById(@Param('id',ParseIntPipe) id: number) {
    console.log(id);
    return this.carsServise.findOneById(Number(id));
  }
}
