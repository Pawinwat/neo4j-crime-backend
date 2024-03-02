import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaService } from './meta.service';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}


  @Get()
  findAll() {
    return this.metaService.findAll();
  }

  @Get('nodes')
  findNode() {
    return this.metaService.findNode();
  }


  @Get('relations')
  findRelation() {
    return this.metaService.findRelation();
  }

  @Get('relationships')
  findAllRelationship() {
    return this.metaService.findAllRelationship();
  }

  @Get('schema')
  findSchema() {
    return this.metaService.findSchema();
  }
 
}
