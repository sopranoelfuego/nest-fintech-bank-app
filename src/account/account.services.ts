import { Inject, Injectable } from '@nestjs/common';
import Account from './account.entity';
import { CreateAccountDto } from './dtos/create-account.dto';

@Injectable()
export default class AccountService {
  constructor(
    @Inject('ACCOUNTS_REPOSITORY') private accountRepository: typeof Account,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.findAll();
  }
  async create(newAccount: CreateAccountDto): Promise<Account> {
    try {
      let account = new this.accountRepository(newAccount);
      return account.save();
    } catch (error) {
      console.log(error.message);
    }
  }
}
