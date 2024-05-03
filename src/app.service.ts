import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const region = 'North East and Yorkshire';
    const country = 'Wales';
    const location =
      country && region ? `${region}, ${country}` : region || country || '';
    const event = location ? `New registered user from ${location}` : 'New registered user';
    console.log(`event`, event);
    return 'Hello World!';
  }
}
