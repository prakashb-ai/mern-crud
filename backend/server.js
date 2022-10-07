const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Crud_router = require('./router/Crud_router');
const cors = require('cors');

dotenv.config();
app.use(cors({ origin: '*' }))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(Crud_router)
mongoose.connect(process.env.STRING)
.then(()=>{
    console.log('database is connected');
}).catch((err)=>{
    console.log(err);
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})