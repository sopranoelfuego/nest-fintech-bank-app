import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import databaseModule from './database/database.module';

@Module({
  imports: [databaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
