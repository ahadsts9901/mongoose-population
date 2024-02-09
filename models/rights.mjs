import mongoose from "mongoose"

const rightSchema = new mongoose.Schema({

    right: {
        type: String,
        required: true
    },
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    }

})

export const rightsModel =  mongoose.model('Rights', rightSchema)