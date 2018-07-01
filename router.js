// -----提取路由-----
// 1-安装express
const express = require('express')
// 加载所有的处理函数模块
const user = require('./controllers/user')
const topic = require('./controllers/topic')
const index = require('./controllers/index')
const category = require('./controllers/category')
// 2-使用express.Router()返回一个实例
const router = express.Router();
// 3- 配置路由 router.get()
// --首页路由
router.get('/', index.showIndex)
// --用户路由
router.get('/signin', user.showSignin)
	  .post('/signin', user.handleSignin)
	  .get('/signup', user.showSignup)
	  .post('/signup', user.handleSignup)
	  .post('/signout', user.handleSignout)
// --话题路由 
router.get('topic/create', topic.showCreate)
	  .post('topic/create', topic.handleCreate)
	  .get('topic/:topicID', topic.showTopic)
	  .get('topic/:topicID/edit', topic.showEdit)
	  .post('topic/:topicID/edit', topic.handleEdit)
	  .post('topic/:topicID/delete', topic.handleDelete)
// 4-导出router
module.exports = router
// 5-在app.js导入，并且 挂载路由 app.use(router)