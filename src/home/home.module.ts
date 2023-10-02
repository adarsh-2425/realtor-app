import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeSchema } from './schemas/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Home', schema: HomeSchema }])],
  providers: [HomeService],
  controllers: [HomeController]
})
export class HomeModule {}
