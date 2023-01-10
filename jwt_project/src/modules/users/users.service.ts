import { User, UserDocument } from '../../models/user.model';

import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async isExist(username: string) : Promise<boolean> {
        const user = await this.userModel.findOne({username:username})
        return user !== null;
    }

    async create(user: User): Promise<User> {
        if(!(await this.isExist(user.username))){
            const createdUser = new this.userModel(user);
            return createdUser.save();
        }else{
            throw new Error("username is existed");
        }
    }
}


