import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserServiceModule } from './user-service/user-service.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forRoot('mongodb+srv://splitwise:j7DqqGi8GWixwWa3@cluster0.rkdgkxz.mongodb.net/user-database'),
    UserServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
