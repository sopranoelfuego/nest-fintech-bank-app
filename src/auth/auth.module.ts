import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { accountProviders } from 'src/account/account.providers';
import { AuthController } from './auth.controller';
import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';
import { jwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],

  providers: [AuthService, jwtStrategy, ...authProviders],
  controllers: [AuthController],
  exports: [jwtStrategy, PassportModule],
})
export class AuthModule {}
