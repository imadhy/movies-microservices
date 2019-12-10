import { Module } from '@nestjs/common';
import { MediaModule } from './media/media.module';

import { AppController } from './app.controller';
import { MediaController } from './media/media.controller';
import { AppService } from './app.service';

@Module({
  imports: [MediaModule],
  controllers: [AppController, MediaController],
  providers: [AppService],
})
export class AppModule {}
