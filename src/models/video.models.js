import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile : {
            type : String, // cloudnary
            required : true
        }, 

        thumbnail : {
            type : String, // cloudnary
            required : true
        },

        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },

        title : {
            type : String,
            required : true,
        },

        description : {
            type : String, 
            required : true,
        },

        duration : {
            type : Number,
            require : true,
        },
        views : {
            type : Number, 
            default : 0
        }, 

        isPublished : {
            type : Boolean,
            defautl : true,
        },
    },
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginate) // idk lets see

export const Video = mongoose.model('Video', videoSchema)