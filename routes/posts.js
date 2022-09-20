const express = require('express');
const router = express.Router();
const Post = require('../model/Post');
const {verifyToken, isAdmin} = require('../middleware/auth')
const Category = require('../model/Category');
const mongoose = require('mongoose');


//get all posts
router.get('/', verifyToken, async (req, res) => {
    console.log(req.body);
    try {
        const posts = await Post.find();//find là tìm tất cả các bài post trong db và trả về cho client 1 mảng các bài post trong db
        console.log(posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//get single post
router.get('/:id',verifyToken, async (req, res) => {
    try {
        console.log(req.params.id);
        const posts = await Post.findById(req.params.id);
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//lấy tất cả các sản phẩm của 1 category theo id của category
router.get('/category/:id',  async (req, res) => {
    try {
        //bắt lỗi không tìm thấy id category
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({message: 'Invalid category id'})
        }

        console.log(req.params.id);
        const posts = await Post.find({category: req.params.id});
        if(!posts){
            res.status(404).json({success:false ,message: 'Không tìm thấy sản phẩm có ID đã cho'})
        }

        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//create a post
router.post('/newPosts', verifyToken, isAdmin,  async (req, res) => {
    console.log(req.body);

    if(!mongoose.isValidObjectId(req.body.category)){
        return res.status(400).send('Invalid Category')
    }
    //hiển thị tất cả các category trong db
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const { title, description } = req.body;//req.body la du lieu gui len tu client gui len server qua body parser va duoc luu vao req.body
    const post = new Post({
        title,
        description,
        user: req.userId,
        category: req.body.category
    });
    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//update the posts
router.put('/updatePost/:id',  async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).send('Invalid Post')
        }

        if(!mongoose.isValidObjectId(req.body.category)){
            return res.status(400).send('Invalid Category')
        }
        //hiển thị tất cả các category trong db
        const category = await Category.findById(req.body.category);
        //req.body.category la id category gui len tu client gui len server qua body parser va duoc luu vao req.body
        if(!category) return res.status(400).send('Invalid Category')
        //findByIdAndUpdate được sử dụng để tìm một id phù hợp mà chúng ta đã cung cấp và cập nhật các trường được chỉ định trong đó.
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body ,{
            new: true
        });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//delete the posts
router.delete('/deletePost/:id', verifyToken, async (req, res) => {
    try {
        const removedPost = await Post.findById(req.params.id);//findById là tìm 1 bài post theo id và trả về cho client 1 bài post trong db

        await removedPost.remove();

        res.status(200).json({
            message: 'Post deleted'
        });
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

//lấy tổng số lượng post
router.get('/get/count', async (req, res) => {
    const postCount = await Post.countDocuments();
    //countDocuments là đếm số lượng bài post trong db và trả về cho client 1 số lượng bài post trong db
    if (!postCount) {
        res.status(500).json({ success: false });
    }
    res.send({  postCount: postCount });
    //req.send là gửi dữ liệu về client dưới dạng json object hoặc string hoặc array
});

module.exports = router;