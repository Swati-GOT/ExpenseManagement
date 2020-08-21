const controller = require('./service')
const express = require('express')
const router = express.Router()

router.post('/add',controller.addCategory)
router.get('/view',controller.viewCategory)
router.put('/update/:id',controller.updateCategory)

module.exports = router;
