import mongoose from "mongoose";
import DB_NAME from '../constant'

const connectDB  = async () => {
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.URI}/${DB_NAME}`)
      console.log(`MongoDB connection Suceesfull ! DB Host : \n`);
      console.log(connectionInstance)

    } catch (error) {
        console.log(`MongoDB connection error `,error);
        process.exit(1) // alternate way to exit
        // throw error --or
    }
}


export default connectDB