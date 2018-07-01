const topicModel = require('../models/topic')
// 话题路由

exports.showTopic = (req, res) => {
	// 获取url传递的id，动态路由的方式
	const topicID = req.params.topicID
	if (isNaN(topicID)) {
		// 不是一个数字
		res.send('参数错误')
	}
	topicModel.getById(topicID, (err, topic) => {
		if (err) {
			return res.send('服务器内部错误')
		}
		if (topic) {
			res.render('topic/show.html', {
				topic
			})
		} else {
			res.send('您的')
		}
	})

	// 1、通过查询字符串传参， /topic/show?id=1
	// .get('/topic/show', topic.showTopic)
	// id=1&name=ab   ->>> {id: '1', name: 'ab'}
	// req.query是对象，express内部把浏览器传递过来的字符串，解析成了对象
	// console.log(req.query.id);

	// 2、动态路由
	// .get('/topic/:topicID',topic.showTopic)
	// console.log(req.params.topicID)
	res.send('showTopic')
}
exports.handleTopic = (req, res) => {
	res.send('handleTopic')
}
exports.showTopicID = (req, res) => {
	res.send('showTopicID')
}
exports.showEdit = (req, res) => {
	res.send('showEdit')
}
exports.handleEdit = (req, res) => {
	res.send('handleEdit')
}
exports.handleDelete = (req, res) => {
	res.send('handleDelete')
}