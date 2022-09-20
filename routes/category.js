const express = require('express');
const router = express.Router();
const Category = require('../model/Category');

const {verifyToken, admin} = require('../middleware/auth')

//create a category
router.post('/newCategory', verifyToken, async (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;//req.body la du lieu gui len tu client gui len server qua body parser va duoc luu vao req.body
    const category = new Category({
        name,
        description,
        users: req.userId
    });
    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

//get all categories
router.get('/', async (req, res) => {
    const categories = await Category.find().populate('users');
    try{
        res.status(200).json({success: true, categories});
    }catch(err){
        res.status(500).json({success: false, err})
    }
})

//get single category
router.get('/singleCategory/:id', async (req, res) => {
    try {
        console.log(req.body);
        //dùng populate dựa vào id của category để lấy tất cả dữ liệu của bảng category
        const category = await Category.findById(req.params.id);
        res.status(200).json({success: true, category})
    } catch (error) {
        res.status(500).json({success: false, error})
    }
})

//update category
router.put('/updateCategory/:id', async (req, res) => {
    try {

        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})//new: true dùng để trả về giá trị mới nhất trong dãy số lượng bản ghi được tìm thấy trong trường hợp nhiều bản ghi được tìm thấy.
        res.status(200).json({success: true, category})
    } catch (error) {
        res.status(500).json({success: false, error})
    }
})

//Delete category
router.delete('/deleteCategory/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const category = await Category.findById(req.params.id)
        await category.remove();
        res.status(200).json({message: 'Category deleted successfully'})
    } catch (error) {
        res.status(500).json({success: false, message: "Bạn đã xóa rồi"})
    }
})

//Get tổng số lượng category
router.get('/getCategoryCount', async (req, res) => {
    const categoriesCount = await Category.countDocuments();

    if(!categoriesCount){
        res.status(500).json({success: false});
    }

    res.send({ categoriesCount : categoriesCount})
})

module.exports = router