import { Module } from '@nestjs/common';
import { accountModule } from './account/account.module';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import databaseModule from './database/database.module';

@Module({
  imports: [databaseModule, AuthModule, accountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
