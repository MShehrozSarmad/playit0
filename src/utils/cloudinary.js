import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY // Click 'View Credentials' below to copy your API secret
});

//upload file method
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        console.log('file is uploaded on cloudinary successfully!', res.url)
        return res;
    } catch (error) {
        fs.unlink(localFilePath); //remove the locally saved temporaray file as the upload operation got failed
        return null;
    }
}


export {uploadOnCloudinary}