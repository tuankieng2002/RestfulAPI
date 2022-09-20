const express = require('express');
const router = express.Router();
const Room = require('../model/Room');

//Create a new room
router.post('/newRoom', async (req, res) => {
    const { members, message } = req.body;
    try {
        let room = new Room({
            members,
            message
        });
        await room.save();
        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//get single room populate
router.get('/singleRoom/:id', async (req, res) => {
    try {

        const room = await Room.findById(req.params.id).populate('members.users', 'fullName address -_id').select('-_id');
        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//viết hàm khởi tạo chat gồm người dùng và người nhận tin nhắn và lưu vào database
/**router.post('/newRoom', async (req, res) => {
    console.log(req.body);
    const { sender, receiver, message } = req.body;//req.body la du lieu gui len tu client gui len server qua body parser va duoc luu vao req.body
    const room = await Room({
        users: [sender, receiver],
        sender: sender,
        message: {
            text:message
        }
    });
    try {
        const savedRoom = await room.save();
        res.status(201).json(savedRoom);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});**/






module.exports = router;