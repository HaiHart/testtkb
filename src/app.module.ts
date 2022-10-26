import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TkbController } from './components/tkb.controller';
import { TkbService } from './components/tkb.service';
import { ParsePipe } from './pipe.parse';

@Module({
  imports: [],
  controllers: [TkbController],
  providers: [TkbService],
})
export class AppModule {}
