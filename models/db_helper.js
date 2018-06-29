// 1-引包
const mysql = require('mysql');
// 2-创建一个数据库连接
const connection = mysql.createConnection({
    connectionLimit : 10,
    host: 'localhost', // 要连接的主机名
    user: 'root', // 要连接的数据库的用户名
    password: 'root', // 数据库密码
    database: 'ithub' // 数据库的名字
});
// 3-开始连接
connection.connect();
// 4-执行sql语句
// query(增删改查的sql语句)
// 6-关闭链接
// connection.end();
module.exports = connection;