var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//jade模板
app.set('views', './app/views');
app.set('view engine', 'jade');

//数据传递格式
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//资源路径
app.use(express.static('public'));

//添加路由
require('./config/routes')(app);

app.locals.moment = require('moment');

app.locals.imgUrl = 'http://cst.ruiei.com/';

app.listen(3000);

