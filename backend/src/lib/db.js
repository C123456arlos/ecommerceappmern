import mongoose from 'mongoose'
import { ENV } from './env.js'
export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV
        if (!MONGO_URI) throw new Error('mongouri no set')
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log('mongodb connected', conn.connection.host)
    } catch (error) {
        console.error('error connecting ', error)
        process.exit(1)
    }
}