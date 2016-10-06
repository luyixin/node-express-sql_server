var db = require('../../config/database').db;
var async = require('async');


exports.index = function (req, res) {
	var task1 = function (cb) {
		db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId', function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};
	
	var task2 = function (cb) {
		db.sql('SELECT top 4 ArticleTitle,AddTime,ArticleImg,IsTop,ArticleSummy,ArticleId from Article where ParentId=70 and IsRecommend=1 order by OrderId DESC', function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};

	var task3 = function (cb) {
		db.sql('SELECT Name,ColumnUrl,Description from ColumnCategory where ParentId=62 order by OrderId', function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};

	var task4 = function (cb) {
		db.sql('SELECT ArticleImg FROM Article WHERE ParentId = 84', function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};

	async.series([task1, task2, task3, task4], function(err, values) {
		if (err) return console.error(err);
		res.render('index', {active: '首页', def: values[0], news: values[1], pro: values[2], banner: values[3]});
	});
}

function _fn (_id, fn) {
	var query = [
	'select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId',
	'SELECT Name,ColumnUrl from ColumnCategory WHERE ParentId=' + _id,
	'SELECT Name,EnglishName,ColumnUrl from ColumnCategory WHERE ColumnId=' + _id
	];
	var task1 = function (cb) {
		db.sql(query[0], function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};

	var task2 = function (cb) {
		db.sql(query[1], function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};

	var task3 = function (cb) {
		db.sql(query[2], function (err, res) {
			if (err) return console.error(err);
			cb(err, res);
		});
	};


	async.series([task1, task2, task3], function(err, values) {
		if (err) return console.error(err);
		fn(values);
	});
}

exports.tem1 = function (req, res) {
	_fn('60', function (val) {
		db.sql('SELECT Content from SingleArticle WHERE ParentId=66', function (err, content) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][0].Name,
				def: val[0],
				deces: val[1],
				content: content[0].Content
			});
		});
	});
}

exports.tem2 = function (req, res) {
	_fn('60', function (val) {
		db.sql('SELECT Content from SingleArticle WHERE ParentId=67', function (err, content) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][1].Name,
				def: val[0],
				deces: val[1],
				content: content[0].Content
			});
		});
	});
}

exports.tem3 = function (req, res) {
	_fn('60', function (val) {
		db.sql('SELECT Url,Description from Imagelist WHERE ParentId=68 order by OrderId DESC', function (err, images) {
			if (err) return console.error(err);
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][2].Name,
				def: val[0],
				deces: val[1],
				img: images
			});
		});
		
	});
}

exports.tem4 = function (req, res) {
	_fn('60', function (val) {
		db.sql('SELECT Content from SingleArticle WHERE ParentId=69', function (err, content) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][3].Name,
				def: val[0],
				deces: val[1],
				content: content[0].Content
			});
		});
	});
}


exports.tem5 = function (req, res) {
	_fn('62', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg from Article where ParentId=74', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][0].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '服务项目',
		eng: 'SERVICE ITEMS',
		dec: '股权投资'
	});*/
}

exports.tem6 = function (req, res) {
	_fn('62', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg from Article where ParentId=75', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][1].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '服务项目',
		eng: 'SERVICE ITEMS',
		dec: '债权投资'
	});*/
}

exports.tem7 = function (req, res) {
	_fn('62', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg from Article where ParentId=76', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][2].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '服务项目',
		eng: 'SERVICE ITEMS',
		dec: '资产管理'
	});*/
}

exports.tem8 = function (req, res) {
	var id = req.query.id;
	if (!id) return res.send('未找到该信息');

	_fn('62', function (val) {
		db.sql('SELECT ParentId,ArticleContent,ArticleTitle from Article where ArticleId=' + id, function (err, content) {
			db.sql('SELECT Name,ColumnUrl,ColumnId from ColumnCategory where ColumnId=' + content[0].ParentId, function (err, parent) {
				db.sql('select top 1 ArticleId,ArticleTitle from Article  where  ArticleId < '+ id +' and ParentId = ' + parent[0].ColumnId + ' order by ArticleId desc', function (err, prev) {
					db.sql('select top 1 ArticleId,ArticleTitle from Article  where  ArticleId > '+ id +' and ParentId = ' + parent[0].ColumnId + ' order by ArticleId desc', function (err, next) {
						res.render('xing', {
							active: val[2][0].Name,
							eng: val[2][0].EnglishName,
							link: val[2][0].ColumnUrl,
							dec: parent[0].Name,
							decLink: parent[0].ColumnUrl,
							def: val[0],
							det: 1,
							deces: val[1],
							content: content[0],
							prev: prev[0],
							next: next[0]
						});
					});
				});
			});
		});
	});
	/*res.render('xing', {
		active: '服务项目',
		eng: 'SERVICE ITEMS',
		dec: '资产管理',
		link: '',
		det: 1
	});*/
}

exports.tem9 = function (req, res) {
	_fn('61', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg,AddTime from Article where ParentId=70 order by IsTop desc,OrderId desc', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][0].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '公司动态',
		eng: 'ABOUT XINGCHUANG',
		dec: '公司新闻'
	});*/
}

exports.tem10 = function (req, res) {
	_fn('61', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg,AddTime from Article where ParentId=71 order by IsTop desc,OrderId desc', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][1].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '公司动态',
		eng: 'ABOUT XINGCHUANG',
		dec: '行业聚焦'
	});*/
}

exports.tem11 = function (req, res) {
	_fn('61', function (val) {
		db.sql('SELECT ArticleId,ArticleTitle,ArticleSummy,ArticleImg,AddTime from Article where ParentId=72 order by IsTop desc,OrderId desc', function (err, rows) {
			res.render('xing', {
				active: val[2][0].Name,
				eng: val[2][0].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][2].Name,
				def: val[0],
				deces: val[1],
				content: rows
			});
		});
	});
	/*res.render('xing', {
		active: '公司动态',
		eng: 'ABOUT XINGCHUANG',
		dec: '员工风采'
	});*/
}


exports.tem12 = function (req, res) {
	var id = req.query.id;
	if (!id) return res.send('未找到该信息');

	_fn('61', function (val) {
		db.sql('SELECT ParentId,ArticleContent,ArticleTitle from Article where ArticleId=' + id, function (err, content) {
			db.sql('SELECT Name,ColumnUrl,ColumnId from ColumnCategory where ColumnId=' + content[0].ParentId, function (err, parent) {
				db.sql('select top 1 ArticleId,ArticleTitle from Article  where  ArticleId < '+ id +' and ParentId = ' + parent[0].ColumnId + ' order by ArticleId desc', function (err, prev) {
					db.sql('select top 1 ArticleId,ArticleTitle from Article  where  ArticleId > '+ id +' and ParentId = ' + parent[0].ColumnId + ' order by ArticleId desc', function (err, next) {
						res.render('xing', {
							active: val[2][0].Name,
							eng: val[2][0].EnglishName,
							link: val[2][0].ColumnUrl,
							dec: parent[0].Name,
							decLink: parent[0].ColumnUrl,
							def: val[0],
							det: 1,
							deces: val[1],
							content: content[0],
							prev: prev[0],
							next: next[0]
						});
					});
				});
			});
		});
	});
	/*res.render('xing', {
		active: '公司动态',
		eng: 'ABOUT XINGCHUANG',
		dec: '行业聚焦',
		link: '222',
		det: 1
	});*/
}

exports.tem13 = function (req, res) {
	var task1 = function (cb) {
		db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	var task2 = function (cb) {
		db.sql('SELECT ArticleTitle,ArticleSummy,ArticleContent,ArticleImg FROM Article WHERE ParentId=63', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	async.series([task1, task2], function (err, val) {
		res.render('xing', {
			active: val[0][3].Name,
			eng: val[0][3].EnglishName,
			def: val[0],
			content: val[1]
		});
	});
	/*res.render('xing', {
		active: '兴创团队',
		eng: 'MANGER TEAM'
	});*/
}


exports.tem14 = function (req, res) {
	var task1 = function (cb) {
		db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	var task2 = function (cb) {
		db.sql('SELECT Content FROM SingleArticle WHERE ParentId=64', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	async.series([task1, task2], function (err, val) {
		res.render('xing', {
			active: val[0][5].Name,
			eng: val[0][5].EnglishName,
			def: val[0],
			content: val[1][0].Content
		});
	});
	/*res.render('xing', {
		active: '企业文化',
		eng: 'CORPORA CULTURE'
	});*/
}

exports.tem15 = function (req, res) {
	var task1 = function (cb) {
		db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	var task2 = function (cb) {
		db.sql('SELECT Content FROM SingleArticle WHERE ParentId=79', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	var task3 = function (cb) {
		db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ColumnId=79', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	var task4 = function (cb) {
		db.sql('SELECT ArticleImg FROM Article WHERE ParentId = 84', function (err, val) {
			if (err) return console.log(err);
			cb(err, val);
		});
	}

	async.series([task1, task2, task3, task4], function (err, val) {
		res.render('xing', {
			active: val[0][0].Name,
			eng: val[2][0].EnglishName,
			def: val[0],
			dec: val[2][0].Name,
			content: val[1][0].Content,
			banner: val[3]
		});
	});
	/*res.render('xing', {
		active: '首页',
		eng: 'COPYRIGHT',
		dec: '版权所有'
	});*/
}

exports.tem16 = function (req, res) {
	_fn('65', function (val) {
		db.sql('SELECT Tittle,LastEditDate,Part,Nums,WorkPlace,WorkType,Contents from Custom_JOB WHERE ParentId=77', function (err, content) {
			res.render('xing', {
				active: val[0][6].Name,
				eng: val[0][6].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][1].Name,
				decLink: val[1][1].ColumnUrl,
				def: val[0],
				deces: val[1],
				content: content
			});
		});
	});
	/*res.render('xing', {
		active: '联系我们',
		eng: 'CONTACT US',
		dec: '人才招聘'
	});*/
}

exports.tem17 = function (req, res) {
	_fn('65', function (val) {
		res.render('xing', {
			active: val[0][6].Name,
			eng: val[0][6].EnglishName,
			link: val[2][0].ColumnUrl,
			dec: val[1][0].Name,
			decLink: val[1][0].ColumnUrl,
			def: val[0],
			deces: val[1],
		});
	});

	/*res.render('xing', {
		active: '联系我们',
		eng: 'CONTACT US',
		dec: '留言建议'
	});*/
}

exports.tem18 = function (req, res) {
	_fn('65', function (val) {
		db.sql('SELECT Address,Tel,Email,QQ from Custom_ContactUs WHERE ParentId=78', function (err, content) {
			res.render('xing', {
				active: val[0][6].Name,
				eng: val[0][6].EnglishName,
				link: val[2][0].ColumnUrl,
				dec: val[1][2].Name,
				decLink: val[1][2].ColumnUrl,
				def: val[0],
				deces: val[1],
				content: content[0],
				QQArr: content[0].QQ.split(",")
			});
		});
	});
	/*res.render('xing', {
		active: '联系我们',
		eng: 'CONTACT US',
		dec: '联系方式'
	});*/
}

exports.tem19 = function (req, res) {
	res.render('includes/tem14');
}


exports.tem20 = function (req, res) {
	var formData = req.body.formData;
	var str = "INSERT INTO [LeaveMessage] ([Name],[Content],[Tel],[ReplyFlag],[Is_Checked],[SystemId]) VALUES ('" + formData.name + "','" + formData.cont + "','" + formData.tel + "',0,0,0)";
	db.sql(str, function (err, content) {
		res.redirect('/contact/suggest');
	});
}

exports.tem21 = function (req, res) {
	db.sql('select Name,EnglishName,ColumnUrl from ColumnCategory where ParentId=0 and isshow=1 order by OrderId', function (err, val) {
		if (err) return console.error(err);
		db.sql('SELECT ArticleImg FROM Article WHERE ParentId = 84', function (e, v) {
			if (err) return console.error(err);
			res.render('xing', {
				active: '首页',
				eng: 'SITE MAP',
				def: val,
				dec: '网站地图',
				banner: v
			});
		});
	});

}


