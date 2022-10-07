const express = require('express');
const router = express.Router();
const Crud = require('../models/crud_model');
const bodyparser = require('body-parser')

router.use(bodyparser.json())
router.post('/api/posts',async(req,res)=>{
    const crud = new Crud({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone
    })
    res.send(crud)
    const data = await crud.save();
    if(!data){
        return res.status(400).send('data is not created')
    }
})

router.get('/api/details',async(req,res)=>{
    const getData = await Crud.find(req.params.id);
    res.send(getData)
    if(getData){
        return res.status(200).send('data is found')
    }
    else{
        return res.status(400).json('not created');
    }
  
})

router.put('/update/:id',async(req,res)=>{
    const update_data = await Crud.findByIdAndUpdate(req.params.id);
    res.send(update_data)
    if(!update_data){
        return res.status(404).send('data is not updated')
    }
})
router.delete('/:id',async(req,res)=>{
    const delte_data = await Crud.findByIdAndDelete(req.params.id);
    res.send(delte_data)
    if(delte_data){
        return res.status(200).send('data is deleted')
    }
})

module.exports = router;