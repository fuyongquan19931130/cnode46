// 引包
const md5 = require('md5')
const userModel = require('../models/users')
// 1-展示登录页面
exports.showSignin = (req, res) => {
	res.render('signin.html')
}
// 2-处理登录逻辑
exports.handleSignin = (req, res) => {
    // res.render("signin.html")
    // 验证邮箱和密码是否正确
    userModel.getByEmail(req.body.email, (err, user) => {
        if (err) {
            return res.send('服务器内部异常')
        }
        // 判断user是否存在
        if (!user) {
            // 不存在
            return res.json({
                code: 401,
                msg: '邮箱不存在，请重新输入或者注册新用户'
            })
        }
        // 判断密码是否正确
        const password = md5(req.body.password)
        if (password === user.password) {
            // 记录session 保存状态
            delete user.password
            req.session.user = user
            // 是跳转  还是输出json??
            res.json({
                code: 200,
                msg: '登录成功'
            })
        } else {
            res.json({
                code: 402,
                msg: '密码错误，请重新输入'
            })
        }
    })
}
// 3-展示注册页面
exports.showSignup = (req, res) => {
	res.render('signup.html')
}
// 4-处理注册逻辑
exports.handleSignup = (req, res) => {
    // res.render('signup.html')
    // 添加数据之前，要做数据验证
  // TODO  验证数据是否数据

  // 验证邮箱是否重复
    userModel.getByEmail(req.body.email, (err, user) => {
        if (err) {
        return res.send('服务器内部错误');
        }
        // 验证昵称
        userModel.getByNickname(req.body.nickname, (err, user) => {
        if (err) {
            return res.send('服务器内部错误');
        }
        req.body.createdAt = new Date();
        req.body.password = md5(req.body.password);
        // 插入用户
        userModel.createUser(req.body, (err, isOK) => {
            if (isOK) {
            res.redirect('/signin');
            } else {
            res.render('/signup', {
                msg: '注册失败'
            });
            }
        })
        });
        
    });
}
// 5-退出
exports.handleSignout = (req, res) => {
    // res.send("handleSignout")
    // 销毁session
    // delete req.session.user
    req.session.destroy()
    // 跳转到登录页面
    res.redirect('/signin')
}