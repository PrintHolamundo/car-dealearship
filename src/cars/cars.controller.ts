import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  getCarById(@Param('id',ParseUUIDPipe) id: string) {
    console.log(id);
    return this.carsServise.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto:CreateCarDto) {
    return this.carsServise.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return this.carsServise.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id',ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id
    }
  }
  
}
function ParseUUID(arg0: string, ParseUUID: any) {
  throw new Error('Function not implemented.');
}

