/*
*生成附件函数，返回附件名称
*如何计算收件人，有重复情况下暂时可不考虑
*发送邮件函数，收件人，主题，附件作为参数 
*/
var nodemailer = require('nodemailer');
//var iconv = require('iconv-lite');//乱码用，暂停用
// var xls = require('node-xlsx');
// var fs = require('fs');
var process=require('process')
// var md5=require('crypto').createHash('md5')
var parseMail=require('./js/parseMail.js')

// var code = 'utf8';
// var content = `<h2>nodemailer基本使用:</h2><h3>
// <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">
// http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`
// var buffer = new Buffer(content);
//var path='./'+md5.update(new Date().toString()).digest('hex');
// var path='./'+new Date().toString();
var column=process.argv[2]?process.argv[2]:0//the third argv as the function ParMail

// fs.mkdirSync(path)
parseMail('a.xlsx', parseInt(column));


// var transporter = nodemailer.createTransport({
//   host:'132.228.56.136',
//   port:25,
//   secure:false,
//   auth: {
//     user: 'nizhiwang.sq',
//     pass: 'sy123123' //授权码,通过QQ获取

//   }
//   });
//   var mailOptions = {
//     from: 'nizhiwang.sq@jsoa.net', // 发送者
//     to: 'nizhiwang.sq@jsoa.net', // 接受者,可以同时发送多个,以逗号隔开
//     subject: 'nodemailer2.5.0邮件发送', // 标题
//     //text: 'Hello world', // 文本
//     html: content//iconv.decode(buffer,code)
//   };

//   transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log('发送成功');
//   });