import { Module } from '@nestjs/common';
import { MetaService } from './meta.service';
import { MetaController } from './meta.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports:[
    ConfigModule  ],
  controllers: [MetaController],
  providers: [MetaService,ConfigService],
})
export class MetaModule {}
