const express = require('express')
const router = express.Router()

// db config

const mongoose = require('./config/connection.js')
const schema = require('./config/schema/schema.js')

router.get('/', async (req, res)=>{

    let query = await schema.find()

    res.render('main', {
        title: 'TASK LIST',
        data: query
    })

})

router.get('/:id', async (req, res)=>{
     let query = await schema.findById(`${req.params.id}`)
     res.render('update', {
        title: 'UPDATE',
        data: query
    })
})

router.post('/', async (req, res)=>{
   let query = new schema(req.body)
   query.save()

   res.redirect('/') 
})

router.get('/delete/:id', async (req, res)=>{
    let query = await schema.findByIdAndDelete(`${req.params.id}`)
    res.redirect('/') 
})

router.post('/update/:id', async (req, res)=>{
    let query = await schema.update({_id: `${req.params.id}`}, req.body)
    await res.redirect('/') 
})

module.exports = router 