import mongoose from "mongoose";

const dbUri = 'mongodb://127.0.0.1:27017/cleandb'

const connectDb = async () => {
    try {
        await mongoose.connect(dbUri)
        console.log('Database connected succesfully')
    } catch (error : unknown) {
        console.log('Error occured while connecting database', error)
    }
}

export default connectDb