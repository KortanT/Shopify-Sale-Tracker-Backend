const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');


const productRoutes = require('./api/routes/stores');
const userRoutes = require('./api/routes/users');

mongoose.connect('mongodb+srv://'
+ process.env.mongoose_user +':' + process.env.mongoose_pwd +
'@shopifytracker.k3g4agn.mongodb.net/?retryWrites=true&w=majority');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/store', productRoutes);
app.use('/user', userRoutes);

app.use((req, resp, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, resp, next) => {
    resp.status(error.status || 500);
    resp.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;