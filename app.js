// 程序入口
var express = require('express')
var bodyParser = require('body-parser')
var art = require('express-art-template')
var router = require('./router')

var app = express()
// 统一静态资源管理(开放权限)
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(router)
app.listen(3000, () => {
	console.log('suc')
})