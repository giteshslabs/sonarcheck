import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const surveyState = 1;
    const region = 'North East and Yorkshire';
    const country = 'Wales';
    const location =
      country && region ? `${region}, ${country}` : region || country || '';
    const event = location
      ? `New T${surveyState} survey from ${location}`
      : `New T${surveyState} survey`;
    console.log(`event`, event);
    return 'Hello World!';
  }
}
