# Backend API for User Authentication and Profile Management
### This repository contains the backend API for an authentication system with profile management features. Users can register, log in, and manage their profiles, including setting them as public or private. Admin users have access to both public and private profiles, while normal users can only view public profiles.


## Features

#### 1. Account Registration
   - New users can easily register for a new account on the platform.

#### 2. Login Functionality
   - Registered users can securely log in to their accounts.

#### 3. Social Media Authentication
   - Unfortunately, due to time constraints, integration of social media authentication services such as Google, Facebook, Twitter, or GitHub has not been implemented in this version of the project. While this feature enhances user convenience and accessibility, it requires additional setup and configuration. It's worth noting that services like Passport package in NestJS provide robust support for integrating social media authentication, which can be explored in future iterations of the project.

#### 4. Logout Capability
   - Users can safely sign out of their accounts when they're done using the platform.

#### 5. Profile Viewing
   - Users can conveniently view their profile details, ensuring they stay up-to-date with their information.

#### 6. Profile Editing
   - Users have full control over their profile details and can easily make edits, including photo updates, name changes, bio adjustments, and updating contact information or passwords.

#### 7. Photo Management
   - Users can upload a new photo or provide an image URL to personalize their profile picture.

#### 8. Privacy Settings
   - Users can choose the visibility of their profile, whether they want it to be public or private, giving them control over their privacy.

#### 9. Admin Profile Access
   - Admin users have privileged access, allowing them to view both public and private user profiles for administrative purposes.

#### 10. Public Profile Access
   - Normal users are limited to viewing only public user profiles, ensuring privacy settings are respected.

## Technologies Used

#### ● NestJS : 
      - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
#### ● MongoDB : 
      - A document-oriented NoSQL database used for storing and managing data.
#### ● JWT Module : 
      - Used for implementing JWT authentication and securing API endpoints.
#### ● Swagger : (DTO Generation) 
      - Swagger is used to generate Data Transfer Objects (DTOs) that define the structure of data exchanged between the client and server. These DTOs help ensure consistency and clarity in data communication.
#### ● Other NestJS Modules : 
      - Various NestJS modules may have been utilized for routing, validation, error handling, etc.


## Usage

### 1. Create Account Operation
#### Endpoint: POST /api/auth/register
Description: Allows users to create a new account.

### 2. Log In Operation
#### Endpoint: POST /api/auth/signIn
Description: Allows users to log in to their accounts.

### 3. Sign Out Operation
#### Endpoint: POST /api/auth/signOut
Description: Allows users to sign out securely.

### 4. Profile Data Retrieval Operation
#### Endpoint: GET /api/user-service/myProfile
Description: Retrieves profile details for the authenticated user.

### 5. Update Profile Details Operation
#### Endpoint: PUT /api/user-service/updateProfile
Description: Allows users to update their profile information.

### 6. Add Image or URL Operation
#### Endpoints: POST /addImage ( This will accept both image url / image file )
Description: Enables users to upload a new photo or provide an image URL for their profile picture.

### 7. Change Profile View Operation ( Public / Private )
#### Endpoint: PUT /api/user-service/updateVisibility
Description: Allows users to set their profile visibility as public or private.

### Admin Endpoints / Normal User Endpoints

### 1. Get Profiles Operation ( This will dynamically handle whether to show all profiles or only public profiles based on the token passed on the header )
#### Endpoint: GET /api/user-service/getAllProfiles
Description: Retrieves user profiles. Admin users have access to both public and private profiles.


## Steps to run the service

#### Step 1. git clone https://github.com/sagarp4/enhanced-auth-service.git
#### Step 2. Switch to master branch, if not in master.
#### Step 3. npm i (to install all the necessary modules / packages)
#### Step 4. npm run start:dev
