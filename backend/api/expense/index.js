const controller = require('./service')
const express = require('express')
const router = express.Router()

router.post('/add',controller.addExpense)
router.get('/view',controller.viewExpense)

module.exports = router;