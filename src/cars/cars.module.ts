import { Module } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
