/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UserSchema } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import { UserForCreate } from './interaces/user.model';
import { HttpException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<CreateUserDto>) {}
  
  async create(createUserDto: CreateUserDto): Promise<UserForCreate> {
    return await this.userModel.create(createUserDto);
  }

  async findAll() : Promise<UserForCreate[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<UserForCreate> {    
    const user = await this.userModel.findById({ _id: id });    
    if (!user) {
      throw new HttpException('Not found user', 404);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate({_id: id});
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
