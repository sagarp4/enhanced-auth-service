import { Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDetails } from 'src/auth/interface/user.interface';

@Injectable()
export class UserServiceService {

    constructor(
        private jwtService : JwtService,
        @InjectModel('UserDetails') private readonly UserDetailsModel : Model<IUserDetails>
    ) {}

    async getMyProfileDetails(requestParams){
        try {
            const data = await this.UserDetailsModel.find({
                "email" : requestParams.email
              }).exec();
            if(data){
                return {
                    "success" : true,
                    "data" : data
                }
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : "failed to get data!"
            }
        }
    }

    async updateProfileVisibility(requestParams) {
        try {
            let email = requestParams.email
            let makePublic = requestParams.makePublic
            let updatedData = await this.UserDetailsModel.findOneAndUpdate({ email }, {"makePublic" : makePublic}, { new: true }).exec();
            return {
                "success" : true,
                "data" : updatedData
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : "failed to update profile visibility!"
            }
        }
    }

    async updateProfile(requestParams){
        try {
            let email = requestParams.email
            let updateObject = requestParams.updateObject
            let updatedData = await this.UserDetailsModel.findOneAndUpdate({ email }, { $set : updateObject}, { new: true }).exec();
            return {
                "success" : true,
                "data" : updatedData
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : "failed to update profile!"
            }
        }
    }

    async getAllProfiles(req){
        console.log(req)
        try {
            let data : Array<{}>;
            if(req['email']=== 'admin@gmail.com'){
                data = await this.UserDetailsModel.find({}).exec();
            }
            else{
                data = await this.UserDetailsModel.find({"makePublic" : true}).exec();
            }
            console.log(data)
            if(data.length > 0){
                return {
                    "success" : true,
                    "data" : data
                } 
            }
            else{
                return {
                    "success" : true,
                    "message" : "Sorry, no public profiles to view!"
                }
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : "failed to get profiles!"
            }
        }
    }

    async addImage(imageString,requestParams) {
        try {
            let email = requestParams['email'];
            let updatedData = await this.UserDetailsModel.findOneAndUpdate(
                { email},
                { $addToSet: { images: imageString } },
                { new: true }
              ).exec();
            return {
                "success" : true,
                "message" : "Image added to your profile",
                "data" : updatedData
            }
        } catch (error) {
            return {
                "success" : false,
                "message" : "failed to add image!"
            }
        }
    }
}
