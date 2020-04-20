import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest',
  password: 'nest',
  database: 'ideasdb',
  entities: [__dirname + '../../**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema:false,
  logging:true
};


// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
//
// const dbConfig = config.get('db');
//
// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: dbConfig.type,
//   host: process.env.RDS_HOSTNAME || dbConfig.host,
//   port: process.env.RDS_PORT || dbConfig.port,
//   username: process.env.RDS_USERNAME || dbConfig.username,
//   password: process.env.RDS_PASSWORD || dbConfig.password,
//   database: process.env.RDS_DB_NAME || dbConfig.database,
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
// };
