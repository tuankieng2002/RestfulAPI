const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    users: {
        //lay data tu ben User qua
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }

})

module.exports = mongoose.model('Category', CategorySchema)