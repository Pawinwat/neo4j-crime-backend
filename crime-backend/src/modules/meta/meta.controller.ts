import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get('node-type')
  findNode() {
    return this.metaService.findNodeType();
  }


  @Get('relation-type')
  findRelation() {
    return this.metaService.findRelationType();
  }

  @Get('relationships')
  findAllRelationship() {
    return this.metaService.findAllRelationship();
  }

  @Get('schema')
  findSchema() {
    return this.metaService.findSchema();
  }

  @Get('search')
  searchText(
    @Query('text') text:string
  ) {
    return this.metaService.searchAllNode(text);
  }
 
}
