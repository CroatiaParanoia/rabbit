import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('file')
export class FileController {
  @Post('upload')
  upload(@Req() request: Request) {
    console.log(request);

    return '上传成功';
  }

  @Post('merge')
  merge(@Req() request: Request) {
    console.log(request);

    return 'merge';
  }
}
