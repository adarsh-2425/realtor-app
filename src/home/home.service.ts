import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Home } from './schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class HomeService {
    constructor(
        @InjectModel(Home.name)
        private homeModel: mongoose.Model<Home>
    ){}
}
