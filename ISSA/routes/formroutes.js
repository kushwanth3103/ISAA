const express = require('express');
const router = express.Router();

const {postform} =require('../controller/controllerform');

//routes post
router.post('/form_post', postform);

module.exports=router;
