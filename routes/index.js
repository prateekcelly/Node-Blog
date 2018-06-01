var express = require('express');
var router = express.Router();
var controller = require('../Controllers/controller');

router.get('/',controller.index);
router.post('/',controller.addpost);
router.get('/adddata',controller.adddata);
router.get('/deletedata',controller.deletedatashow);
router.post('/deletedata',controller.deletedata);

module.exports = router;
