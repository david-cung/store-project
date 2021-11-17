import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.provider';


@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'P4ssw0rd1@',
        database: 'test-project',
        autoLoadEntities: true,
        synchronize: true,
      }),
    StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
