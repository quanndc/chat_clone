
import { UsersService } from './users.service';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { User } from 'src/models/user.model';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    async createUser(@Body() user: User){
        try {
            const result = await this.userService.create(user);
            return{
                data: result,
                message: "Tạo thành công"
            }
        } catch (error) {
            return {
                message: error.message,
            }
        }
    }
}
