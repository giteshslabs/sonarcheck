import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { URL, parse } from 'url';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // The signature '(urlString: string): UrlWithStringQuery' of 'url.parse' is deprecated.
    const parsedUrl = parse(req.originalUrl).pathname;
    console.log(`parsedUrl`, parsedUrl, req.route);

    // console.log(`req.url`, req.baseUrl);
    // const parsedUrl = new URL(req.url);

    // console.log(`parsedUrl`, parsedUrl);
    next();
  }
}
