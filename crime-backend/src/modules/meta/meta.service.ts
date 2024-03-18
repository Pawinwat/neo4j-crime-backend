import { Injectable, Logger } from '@nestjs/common';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import neo4j ,{ Driver } from 'neo4j-driver';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MetaService {
  private readonly driver: Driver;
  private readonly logger:Logger
  // configService:ConfigService

  constructor(
    private configService: ConfigService
  ) {
    console.log('url', this.configService.get('NEO4J_URI'))
    this.driver = neo4j.driver(
      this.configService.get('NEO4J_URI'),
      neo4j.auth.basic(
        this.configService.get('NEO4J_USERNAME'),
        this.configService.get('NEO4J_PASSWORD'),
      )
    );
  }

  async query(query:string){
    const session = this.getDriver().session();

    try{
      const result = await session.run(query);
      return result.records
    }
    catch(error){
      this.logger.error(error);
      return {
        error
      }
    }
    finally{
      session.close();
    }
  }
  
  getDriver(): Driver {
    return this.driver;
  }

  create(createMetaDto: CreateMetaDto) {
    return 'This action adds a new meta';
  }


  async findAll() {
    const session = this.getDriver().session();
    const result = await session.run('MATCH (n) RETURN n LIMIT 25');
    session.close();
    return result.records
  }

  async findNodeType() {
    const query = 'CALL db.labels() YIELD label RETURN label;'
   return this.query(query)
  }


  async findRelationType(){
    const query =`CALL db.relationshipTypes() YIELD relationshipType RETURN relationshipType;`
    return this.query(query)
  }

  async findAllRelationship(){
    const query =`MATCH (startNode)-[relationship]->(endNode)
    RETURN DISTINCT labels(startNode) AS startNodeType, type(relationship) AS relationshipType, labels(endNode) AS endNodeType;`
    return this.query(query)
  }


  async findSchema(){
    const query = 'CALL db.schema.visualization()'
    return this.query(query)
  }

  async searchAllNode (searchText:string){
    const query = `
    match (n) 
    with n, [x in keys(n) WHERE n[x] =~ '.*${searchText}.*'] as doesMatch
    where size(doesMatch) > 0
    return n
    limit 10
    `
    return this.query(query)

  }


}
