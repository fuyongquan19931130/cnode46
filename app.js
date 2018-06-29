// 程序入口
// app.js的作用
// 1-配置    2-监听端口
const express = require('express')
const bodyParser = require('body-parser')
const MySQLStore = require('express-mysql-session')(session)
// 导入处理函数的模块
const expressArtTemplate = require('express-art-template')
// 引入session模块
const session = require()
// 导入路由模块
const router = require('./router')

const app = express()
// 统一静态资源管理(开放权限)
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
// 配置模板引擎
app.engine('html', expressArtTemplate)
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const db = config.database;
// 把session保存到mysql中
const options = {
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database
}

const sessionStore = new MySQLStore(options)
// 配置session
app.use(session({
  key: 'sessionid',  // 修改sessionid的名称
  secret: 'keyboard cat',  // 对sessionid 进行加密 
  resave: false,   // 强制重新存储服务器上的session数据  
  store: sessionStore,   // 配置把session数据存储到mysql
  saveUninitialized: true  // 即使不写session 也会生成sessionid
}))


app.use(router)
// 监听端口
const PORT = 3000
app.listen(PORT, () => {
	console.log('监听 3000成功')
})