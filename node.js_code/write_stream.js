var fs = require("fs");
var data = "this is a write stream test***************************";

var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data,'UTF8');
//标记文件吗，末尾
writeStream.end();

//处理流事件-->data ,and error
writeStream.on('finish',function(){
	console.log("write over");
});

writeStream.on('error',function(err){
	console.log("err.stack");
});

console.log("program exec over");