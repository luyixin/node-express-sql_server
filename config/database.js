var mssql = require('mssql');
var db = {};
var config = {
  user: user, password: password, server: server IP, database: 'data name'
};

//执行sql,返回数据.  
db.sql = function (sql, callBack) {
  var connection = new mssql.Connection(config, function (err) {
    if (err) return console.log(err);
    var ps = new mssql.PreparedStatement(connection);
    ps.prepare(sql, function (err) {
      if (err) return console.log(err);
      ps.execute('', function (err, result) {
        if (err) return console.log(err);
        ps.unprepare(function (err) {
          if (err){
            console.log(err);
            return callback(err, null);
          }
          callBack(err, result);
        });
      });
    });

  });
};

exports.db = db;
