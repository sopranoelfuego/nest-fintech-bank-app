import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload-interface';
import { User } from './user.entity';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('USERS_REPOSITORY') private userRepository: typeof User) {
    super({
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
