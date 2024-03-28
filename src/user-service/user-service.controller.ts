import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.gaurd';
import { UserServiceService } from './user-service.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user-service')
export class UserServiceController {

    constructor(private userService : UserServiceService) {}

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('myProfile')
    async myProfile(@Body() formFields){
        console.log("controller : ",formFields)
        return await this.userService.getMyProfileDetails(formFields)
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('updateVisibility')
    async updateVisibility(@Body() formFields){
        console.log("controller : ",formFields)
        return await this.userService.updateProfileVisibility(formFields)
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('updateProfile')
    async updateProfile(@Body() formFields){
        console.log("controller : ",formFields)
        return await this.userService.updateProfile(formFields)
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('getAllProfiles')
    async getAllProfiles(@Req() req:Request){
        return await this.userService.getAllProfiles(req['userInfo'])
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor('file'))
    @Post('addImage')
    async addImage(@Body() formFields,@UploadedFile() file : Express.Multer.File){
        if(file && file.mimetype === 'image/png'){
            return await this.userService.addImage(file.buffer,formFields)
        }
        else if(formFields['imageUrl'].length > 0){
            return await this.userService.addImage(formFields['imageUrl'],formFields)
        }
        else{
            return {
                "success" : true,
                "message" : "Invalid File / Url" 
            }
        }
    }
}
