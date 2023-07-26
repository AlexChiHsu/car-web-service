import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: ['dist/**/entities/*{.ts,.js}'],
        synchronize: true,
        migrations: [__dirname + 'src/migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
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
