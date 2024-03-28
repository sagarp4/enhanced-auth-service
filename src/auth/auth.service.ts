import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDetails } from './interface/user.interface';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class AuthService {

    constructor(
        private jwtService : JwtService,
        @InjectModel('UserDetails') private readonly UserDetailsModel : Model<IUserDetails>
        ) {}

    async createAccount(userInfo : UserDTO, image) {
        console.log(userInfo)
        if (image && image.mimetype !== 'image/png') throw new BadRequestException('Invalid image type!')
        if(await this.checkUser(userInfo) === true){
            return {
                "success" : true,
                "message" : "User already exists!"
            }
        }
        const payload = {
            email : userInfo.email,
            password : userInfo.password
        }
        let finalObject = {
            ...userInfo,
            image : image.buffer
        }
        try {
            const newUserData = new this.UserDetailsModel(finalObject)
            await newUserData.save();
            return {
            "success" : true,
            "message" : "User Created Succesfully",
            "token" : await this.jwtService.signAsync(payload) // we can use this token and save it in session in frontend service for future operations
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : error
            }
        }
    }

    async signIn(userData){
        try {
            const data = await this.UserDetailsModel.find({
                "email" : userData.email,
                "password" : userData.password
              }).exec();
            if(data.length > 0){
                const payload = {
                    email : userData.email,
                    password : userData.password
                }
                return {
                    "success" : true,
                    "message" : "User logged in successfully!",
                    "token" : this.jwtService.sign(payload) // we can use this token and save it in session in frontend service for future operations
                }
            }
            return {
                "success" : true,
                "message" : "Invalid credentials / User does not exists!"
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : error
            }
        }
    }

    async checkUser(userData): Promise<Boolean>{
        try {
            const data = await this.UserDetailsModel.find({
                "email" : userData.email
              }).exec();
            console.log(data)
            if(data.length > 0){
                return true
            }
            return false
        } catch (error) {
            return true
        }
    }

}
