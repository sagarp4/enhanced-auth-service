import { IsString, IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Username', example: 'Sagar' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'email', example: 'sagar@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'password', example: 'XXXXX' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Bio', example: 'I am an Engineer' })
  bio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'phone', example: 123123123 })
  phone: Number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'image'})
  file: Express.Multer.File;
}