import { Body, Controller, HttpCode, HttpStatus, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserDTO } from './dto/user.dto';
import { AuthGuard } from './auth.gaurd';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor('file'))
    @Post('register')
    async createAccount(@Body() formFields : UserDTO, @UploadedFile() file : Express.Multer.File) {
        return await this.authService.createAccount(formFields,file)
    }

    @HttpCode(HttpStatus.OK)
    @Post('signIn')
    async signIn(@Body() formFields){
        return await this.authService.signIn(formFields)
    }

}
