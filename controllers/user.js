// 1引包
var mysql = require('mysql');
// 2买一个冰箱(创建一个数据库连接)
var connection = mysql.createConnection({
    host: 'localhost', // 要连接的主机名
    user: 'root', // 要连接的数据库的用户名
    password: 'root', // 数据库密码
    database: 'ithub' // 数据库的名字
});
// 3打开冰箱门(开始连接)
connection.connect();
// 4把大象装冰箱(执行sql语句) 
// query(增删改查的sql语句)
// SELECT 1 + 1 AS solution:将1+1的结果起了个名字叫solution(并没有查表)
// 建议在表名两侧加上`` 防止连写时报错


exports.showSignin = (req, res) => {
	res.render('signin.html')
}
exports.handleSignin = (req, res) => {
	res.render("signin.html")
}
exports.showSignup = (req, res) => {
	res.render('signup.html')
}
exports.handleSignup = (req, res) => {
	var body = req.body
	console.log(body)
	// 2-服务端 获取表单数据
    //     2.1--获取req.body中的表单数据
    //     2.2--验证
    //             格式是否正确
    //             数据库中是否存在此用户
    //     2.3--把登录之后的页面(首页)返回到前端
    var sqlStr = 'insert into `users` set ?'
    connection.query(sqlStr, body,  function(error, results, fields) {
		if (error)  throw error; 
		console.log(results);
    });
	// res.render('signup.html')
}
exports.handleSignout = (req, res) => {
	res.send("handleSignout")
}

// 关闭冰箱门
// connection.end();