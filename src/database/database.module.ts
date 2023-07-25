import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'alex',
      password: 'password',
      database: 'cardatabase',
      entities: ['dist/**/entities/*{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + 'src/migrations/*{.ts,.js}'],
    }),
  ],
})
export class DatabaseModule {
  constructor(database: DataSource) {
    if (database.isInitialized) {
      console.log('DB Connected Successfully!');
    }
  }
}
