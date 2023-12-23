import mongoose, {Schema} from "mongoose"

const userSchema = new Schema(
    {
        
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Video",
            }

        ],
        userName : {
            type : String,    
            required : true,
        },

        email : {
            type : String,
            required : true,
            lowercase : true,
            
        },

        fullName : {
            type : String,
            required : true,
            
        },

        avatar : {
            type : String , // cloudnary url
            required : true,

        },

        coverImage : {
            type : String, // cloudnary url
        },

        password : {
            type : String, // bycpt 
            required : [true, "Password is required"]
        },

        refreshToken : {
            type : String, // jwt 
        }
    },

    {
        timestamps:true
    }
)


export const User = mongoose.model('User', userSchema);