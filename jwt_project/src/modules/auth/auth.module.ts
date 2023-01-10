import { UsersModule } from './../users/users.module';

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { secret_key_jwt } from '../../../keys/config.json';

@Module({
  imports: [JwtModule.register({ secret: secret_key_jwt })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
