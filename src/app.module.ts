import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserServiceModule } from './user-service/user-service.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/user-database'),
    UserServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
