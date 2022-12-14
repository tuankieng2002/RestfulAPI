const express = require('express');
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser');//body-parser là một middleware giúp chúng ta có thể truy cập các giá trị được gửi từ form bằng cách sử dụng req.body

// app.use(bodyParser.json());

//Middleware
app.use(express.json());//nếu thiếu express.json() thì req.body sẽ trả về undefined khi gửi dữ liệu lên server bằng postman hoặc form html bình thường (không có enctype="multipart/form-data")


//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const categoriesRoute = require('./routes/category');
const roomRoute = require('./routes/room');

app.use('/api/v3/posts', postsRoute);
app.use('/api/v3/users', usersRoute);
app.use('/api/v3/category', categoriesRoute);
app.use('/api/v3/room', roomRoute);

//connect to DB
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
    console.log('connected to DB');
});

app.listen(process.env.PORT, function () {
    console.log('http://localhost:'+process.env.PORT);
});
