import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

export const staffModel =  mongoose.model('Staff', staffSchema)