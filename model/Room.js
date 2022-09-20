const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    members:[
        {
            users: {
                //lay data tu ben User qua
                type: Schema.Types.ObjectId,
                ref: 'Users'
            },

        }
    ],
    message:{
        text:{
            type: String,
            default: ""
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    /**message: {
        text: {
            type: String,
            required: true
        },
    },
    users: Array,
    sender: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    },
    {
    timestamps: true,//thoi gian tao va thoi gian cap nhat**/

})




module.exports = mongoose.model('Rooms', RoomSchema);