import { Module } from '@nestjs/common';
import accountController from './account.controller';
import { accountProviders } from './account.providers';
import AccountService from './account.services';

@Module({
  imports: [],
  controllers: [accountController],
  providers: [AccountService, ...accountProviders],
})
export class accountModule {}
