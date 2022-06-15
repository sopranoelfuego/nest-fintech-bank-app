import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('cron');
  getHello(): string {
    return 'Hello World!';
  }
}
