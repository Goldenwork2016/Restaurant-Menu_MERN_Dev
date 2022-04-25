const express = require('express');
const router = express.Router();

// Authentication Controllers
const authCtrl = require('../controller/auth.controller');

// Authentication Routes 
router.post('/createUser', authCtrl.createUser);


module.exports = router;