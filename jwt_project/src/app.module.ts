import { UsersService } from './modules/users/users.service';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { mongo_url} from '../keys/config.json';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { MessageGateway } from './message/message.gateway';


@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(mongo_url)],
  controllers: [AppController, UsersController],
  providers: [AppService, AuthService, UsersService, MessageGateway],
})
export class AppModule {}
