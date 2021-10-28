import { Module } from '@nestjs/common';
import { FileController } from './file.controller';

@Module({
  imports: [FileModule],
  controllers: [FileController],
})
export class FileModule {}
