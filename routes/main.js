const express = require('express');
const router = express.Router();


let mainController = require('../controllers/mainController.js');

// console.log(mainController);

router.get('/', mainController.home)

router.get('/contacto', mainController.contacto);
router.get('/about', mainController.about);





module.exports = router;