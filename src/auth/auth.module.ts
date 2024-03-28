import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserDetails, UserDetailsSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [
    JwtModule.register({
      global: true,
      secret: 'secret@1234',
      signOptions: { expiresIn: '1h' },
      }),
      MongooseModule.forFeature([
        { name: 'UserDetails', schema: UserDetailsSchema },
      ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
