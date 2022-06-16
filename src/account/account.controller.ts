import { Controller, Get, Post } from '@nestjs/common';
import Account from './account.entity';
import AccountService from './account.services';
import { CreateAccountDto } from './dtos/create-account.dto';

@Controller('account')
export default class accountController {
  constructor(private accountService: AccountService) {}
  @Get()
  async getAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }
  @Post()
  async create(newAccount: CreateAccountDto): Promise<Account> {
    return this.accountService.create(newAccount);
  }
}
