import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload-interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('USERS_REPOSITORY') private userRepository: typeof User,
  ) {}
  async signup(createUserDto: CreateUserDto): Promise<void> {
    const { username, password, email } = createUserDto;
    try {
      let user = new this.userRepository();

      user.username = username;
      user.email = email;
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);
      user.save();
    } catch (error) {
      console.log('error:', error);
    }
  }
  async getAll(): Promise<User[]> {
    let user = new this.userRepository();
    return this.userRepository.findAll<User>();
  }
  // async deleteAll() {
  //   return this.userRepository.
  // }
  async signin(authUserDto: AuthUserDto): Promise<{ accessToken: string }> {
    const { username, password } = authUserDto;
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const jwtPayload: JwtPayload = { username };
      const accessToken = await this.jwtService.sign(jwtPayload);
      return { accessToken };
    } else throw new UnauthorizedException('wrong usernaname or password....');
  }
}
