import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDetailsSchema } from 'src/auth/schema/user.schema';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name: 'UserDetails', schema: UserDetailsSchema },
    ])
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService]
})
export class UserServiceModule {}
