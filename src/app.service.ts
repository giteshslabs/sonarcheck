import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const region = 'North East and Yorkshire';
    const country = 'Wales';
    const event = `New registered user${country ? ` from ${region ? `${region}, ` : ''}` : region ? ' from ' : ''}${country || region || ''}`;
    console.log(`event`, event);
    return 'Hello World!';
  }
}
