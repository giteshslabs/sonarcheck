import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import * as url from 'url';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): any {
    // The signature '(urlString: string): UrlWithStringQuery' of 'url.parse' is deprecated.
    const originalUrl =
      'https://chatgpt.com/c/10fc6a78-75de-45a0-8bf1-5648220889db';
    const parsedUrl = url.parse(originalUrl).pathname;
    console.log(`parsedUrl`, parsedUrl);

    // This assertion is unnecessary since it does not change the type of the expression.
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decodedData = this.jwtService.decode(jwtToken, {
      complete: true,
    }) as JwtPayload;
    console.log(`decodedData`, decodedData);
  }
}
