// 程序入口
// app.js的作用
// 1-配置    2-监听
const express = require('express')
const bodyParser = require('body-parser')
// 导入处理函数的模块
const expressArtTemplate = require('express-art-template')
// 引入session模块
const session = require()
const router = require('./router')

const app = express()
// 统一静态资源管理(开放权限)
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
// 配置模板引擎
app.engine('html', expressArtTemplate)
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 配置session
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.use(router)
// 监听端口
const PORT = 3000
app.listen(PORT, () => {
	console.log('监听 3000成功')
})