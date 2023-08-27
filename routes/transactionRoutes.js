const express = require('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionCtrl')

//router object
const router = express.Router()

//routers
//add transaction POST Method
router.post('/addtransaction', addTransaction)

//get transaction
router.post('/gettransaction', getAllTransaction)

//edit transaction
router.post('/edittransaction', editTransaction)

//edit transaction
router.post('/deletetransaction', deleteTransaction)

module.exports = router
