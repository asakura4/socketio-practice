const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/chatroom', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/chatroom.html'))
})

router.use('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = router
