const controller = require('./service')
const express = require('express')
const router = express.Router()

router.post('/add',controller.addIncome)
router.get('/view',controller.viewIncome)

module.exports = router;
