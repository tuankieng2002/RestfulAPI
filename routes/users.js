const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');


//register user
router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const { phone, email, password, fullName, address, avatar } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await argon2.hash(password);

        user = await User.create({
            phone,
            email,
            password: hashedPassword,
            fullName,
            address,
            avatar
        });

        const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET);

        res.status(201).json( {
            success: true,
            //user,
            accessToken
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'Tài khoản hoặc mật khẩu không hợp lệ'
            });
        }

        const passwordValid = await argon2.verify(user.password, password);

        if (!passwordValid) {
            return res.status(400).json({
                message: 'Tài khoản hoặc mật khẩu không hợp lệ'
            });
        }

        //accessToken
        const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).json({
            success: true,
            //user,
            accessToken
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//get all users
router.get('/allUsers', async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
});

//get single user
router.get('/singleUsers/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json( {
            success: true,
            user
        });
    } catch (err) {
        res.status(404).json({message:"Không tìm thấy người dùng"});
    }
});

//update password
router.put('/updatePassword/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { password }, {
            new: true
        });
        res.status(201).json( {
            success: true,
            user
        });
    } catch (err) {
        res.status(404).json({message:"Không tìm thấy người dùng"});
    }
});

//update info users
router.put('/updateInfo/:id', async (req, res) => {
    try {
        const { phone, fullName, address } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { phone, fullName, address }, {
            new: true
        });
        res.status(201).json( {
            success: true,
            user
        });
    } catch (err) {
        res.status(404).json({message:"Không tìm thấy người dùng"});
    }
});

//update password, confirm password, new password
router.put('/updatePass/:id', async (req, res) => {
    try {
        const { password, newPassword, confirmPassword } = req.body;
        const user = await User.findById(req.params.id);
        if (user.password !== password) {
            return res.status(400).json({
                message: 'Mật khẩu cũ không đúng'
            });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                message: 'Mật khẩu xác nhận không hợp lệ'
            });
        }
        const userUpdate = await User.findByIdAndUpdate(req.params.id, { password: newPassword }, {
            new: true
        });
        res.status(201).json( {
            success: true,
            userUpdate
        });
    } catch (err) {
        res.status(404).json({message:"Không tìm thấy người dùng"});
    }
});

//logout delete token
router.get('/logout', async (req, res) => {
    try {
        // tìm record token dựa theo token được gửi lên
        const token = await User.findOne({ token: req.headers.authorization });
        if (token) {
            // nếu tìm thấy thì xóa record token này đi
            await token.remove();
            console.log(token);
        }
        res.json({ success: true, message: 'Đăng xuất thành công', token });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;